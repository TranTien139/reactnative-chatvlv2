export const AUTH_USER = 'AUTH',
    UNAUTH_USER = 'UNAUTH';

import axios from 'axios';
import {domain} from '../config/config_domain.js';

export const loginUser = (input_login)=>{
    return function(dispatch) {
        axios.post(domain.domain+'/users/login',input_login).then(res=>{
            res = res.data;
            let token = res.id;
            if(token && res.userId){
                let getUserInfo = new Promise((resolve,reject)=>{
                    axios.post(domain.domain+'/user_generals/getUserInfo',{"id": res.userId}).then(respon=>{
                        respon = respon.data;
                        respon = respon.data;
                        resolve(respon)
                    }).catch(err=>{
                        reject(err);
                    });
                });
                getUserInfo.then(data=>{
                    dispatch({ type: AUTH_USER, payload: data});
                });

            }
        }).catch(err=>{
        });
    }
}

export const logoutUser = ()=>{
    return function (dispatch) {
        axios.post(domain.domain+'/users/logout?access_token='+ localStorage.getItem('dangnhap')).then(data=>{
            dispatch({ type: UNAUTH_USER });
        }).catch(err=>{

        });
    }
}

export const checkLogin = ()=>{
    let check_login = localStorage.getItem('dangnhap');
    if(check_login) {
        check_login = JSON.parse(check_login);
        return check_login.data;
    }else {
        return null;
    }
};

export const setStorage = (token, data)=>{
    let result = {token:token, data:data };
    result = JSON.stringify(result);
    localStorage.setItem('dangnhap',result);
};

export const removeStorage = ()=>{
    let check_login = localStorage.removeItem('dangnhap');
    return check_login;
};

export const getToken = ()=>{
    let check_login = localStorage.getItem('dangnhap');
    if(check_login) {
        check_login = JSON.parse(check_login);
        return check_login.token;
    } else {
        return null;
    }
};