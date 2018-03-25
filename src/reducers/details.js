function details(state={
    loading : true,
    data    : {
        replies : [],
        reply_count:0,
        author :{
            avatar_url : "",
            loginname  : ""
        },
        create_at : "",
        good : true
    }
},action){
    switch(action.type){
        case "DETAILS_UPDATE" :
            return {
                data : state.data,
                loading : true,
            };
        case "DETAILS_UPDATE_SUCCES" :
            return {
                data : action.data.data,
                loading : false,
            };
        case "DETAILS_UPDATE_ERROR" :
            return {
                data :  {
                    replies : [],
                    reply_count:0,
                    author :{
                        avatar_url : "",
                        loginname  : ""
                    },
                    create_at : "",
                    good : true
                },
                loading : true,
            };
        default :
            return state;
    }
}

export default details;