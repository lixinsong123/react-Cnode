import React,{Component} from 'react';
import {Avatar,Row,Col} from "antd";
// import data from "./data";
import UserList from './userList';
import   {connect}   from "react-redux";
import axios from "axios";
class User extends Component{
    constructor(arg){
        super(arg);
        let name = this.props.match.params.name;
        this.getData(name);
    }
    getData(name){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type : "USER_UPDATE"
            });
            axios.get(`http://cnodejs.org/api/v1/user/${name}`)
                .then((res)=>{
                    console.log(res);
                    dispatch({
                        type : "USER_UPDATE_SUCCES",
                        data : res.data
                    });
                })
                .catch((error)=>{
                    dispatch({
                        type : "USER_UPDATE_ERROR",
                    });
                })
        });
    }
    render(){
        console.log(this.props);
        let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} = this.props;
        return(
            <div className="wrap">
                <Avatar src={avatar_url} className = "userAvatar" />
                <Row className="userInfo">
                    <Col md={8}>
                        用户名:<a>{loginname}</a>
                    </Col>
                    <Col md={8}>
                         积分:<a>{score}</a>                 
                    </Col>
                    <Col md={8}>
                         注册时间:<a>{create_at.split("T")[0]}</a>                 
                    </Col>
                </Row>
                <UserList loading = {false} title="最近创建的话题" data = {recent_topics}  >

                </UserList>
                <UserList loading = {false} title="最近回复的话题" data = {recent_replies}  >

                </UserList>
            </div>
        );
    }
}

export default connect(state=>state.user)(User);