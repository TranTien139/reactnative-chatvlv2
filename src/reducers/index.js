import { combineReducers } from 'redux'
import {setpage,setpageHot,setpageImage,setpageVideo} from './setPage.js'
import {getArticle} from './getArticle.js'
import {getHot,getVideo,getImage,getTopUser} from './getHot.js'

export default combineReducers({
    page: setpage,
    article: getArticle,
    hot:getHot,
    image:getImage,
    video:getVideo,
    isloading: true,
    gettopuser:getTopUser
});
