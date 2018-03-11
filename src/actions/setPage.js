
export const setpage = (page)=>{
    return function(dispatch){
        dispatch({type:'SET_PAGE',payload:page});
    }
}

export const setpageHot = (page)=>{
    return function(dispatch){
        dispatch({type:'SET_PAGE_HOT',payload:page});
    }
}

export const setpageImage = (page)=>{
    return function(dispatch){
        dispatch({type:'SET_PAGE_IMAGE',payload:page});
    }
}

export const setpageVideo = (page)=>{
    return function(dispatch){
        dispatch({type:'SET_PAGE_VIDEO',payload:page});
    }
}

