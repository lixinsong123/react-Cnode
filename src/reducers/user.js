function user(state={
        avatar_url : "",
        create_at  : "",
        loginname  : "",
        recent_replies : {
            author : {
                avatar_url : "",
                loginname  : "",
                title : "",
                last_reply_at : ""
            },
        recent_topics : {
            author : {
                avatar_url : "",
                loginname  : "",
                title : "",
                last_reply_at : ""
            }
        }
    }
    
},action){
    switch(action.type){
        case "USER_UPDATE" :
            return {...state};
        case "USER_UPDATE_SUCCES" :
            return {
                avatar_url : action.data.data.avatar_url,
                create_at  : action.data.data.create_at,
                loginname  : action.data.data.loginname,
                recent_replies : action.data.data.recent_replies,
                recent_topics : action.data.data.recent_topics
        };
        case "USER_UPDATE_ERROR" :
            return {
                avatar_url : "",
                create_at  : "",
                loginname  : "",
                recent_replies : {
                    author : {
                        avatar_url : "",
                        loginname  : "",
                        title : "",
                        last_reply_at : ""
                    },
                },
                recent_topics : {
                    author : {
                        avatar_url : "",
                        loginname  : "",
                        title : "",
                        last_reply_at : ""
                    }
                }
            
            
        };
        default :
            return state;
    }
}
export default user;