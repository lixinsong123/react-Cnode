import React,{Component} from 'react';
import {List,Avatar} from 'antd';
import {Link} from 'react-router-dom';
// import data from './data';
import TxtTag from "../txtTag";
import  axios   from "axios";
import {connect}  from "react-redux";
class Index extends Component{
    constructor(arg){
        super(arg);
        this.state = {
            page : 1,
        }
        this.getData(this.props.tab,this.state.page);
    }
    shouldComponentUpdate(nextProps,netState){
        if(netState.page !== this.state.page){
            this.getData(nextProps.tab,netState.page);
            return false;
        }
        if(this.props.tab!==nextProps.tab){
            this.state.page = 1;
            this.getData(nextProps.tab,1);
            return false;
        }
        return true;
    }
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type : "LIST_UPDATA",
            });
            axios.get(`http://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
            .then((res)=>{
                dispatch({
                    type : "LIST_UPDATA_SUCC",
                    data : res.data
                });
            })
            .catch((error)=>{
                console.log(error);
                dispatch({
                    type : "LIST_UPDATA_ERROR",
                    data : error
                });
            });
        });
    }
    render(){
        //loading,data,tab,page
        //console.log(this.props);
        let {loading,data} = this.props;
        let This =this;
        let paginationData = {
            current : this.state.page,
            pageSize : 10,
            total : 1000,
            onChange(current){
                    This.setState({
                        page : current
                    });
            }
        }
        return (
            <List
                loading = {loading}
                dataSource = {data}
                pagination = {loading?false:paginationData}
                renderItem = {item=>(<List.Item
                    actions ={ ["回复:"+item.reply_count,"访问:"+item.visit_count]}
                    
                >
                    <List.Item.Meta
                        avatar = {<Avatar src={item.author.avatar_url}/>}
                        title  = {<div>
                                    <TxtTag data={item}/>
                                    <Link to={"/details/"+item.id}>{item.title}
                                    </Link>
                                </div>}
                        description = {<p>
                            <Link to={"/user/"+item.author.loginname}>
                                  {item.author.loginname}
                            </Link>
                        发表于:{item.create_at.split("T")[0]}
                        </p>}
                    />
                </List.Item>)}
            >
                
            </List>
        );
    }
}
export default connect(state=>state.list)(Index);
