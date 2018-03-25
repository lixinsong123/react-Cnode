import React,{Component} from 'react';
import TxtDetails from "./textDetails";
// import data from "./data";
import ReplayList from "./replayList";
import {connect}  from "react-redux";
import  axios   from "axios";
class Details extends Component{
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id;
        this.getData(id);
    }  
    
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type : "DETAILS_UPDATE"
            });
            axios.get(`http://cnodejs.org/api/v1/topic/${id}`)
            .then((res)=>{
                dispatch({
                    type : "DETAILS_UPDATE_SUCCES",
                    data : res.data
                });     
            })
            .catch((error)=>{
                dispatch({
                    type : "DETAILS_UPDATE_ERROR",
                });    
            });
        });
    }
    render(){
        //console.log(this.props);
        let {loading,data} = this.props;
        return(
            <div className = "wrap">
                <TxtDetails
                    data = {data}
                    loading = {loading}
                ></TxtDetails>
                <ReplayList
                    replies = {data.replies}
                    repliesCount = {data.reply_count}
                    loading = {loading}
                >
                </ReplayList>
            </div>
        );
    }
}

export default connect(state=>state.details)(Details);