import React,{Component} from 'react';
import {Card,Avatar} from "antd";
import {Link} from "react-router-dom";
import TxtTag from '../txtTag';
export default class TxtDetails extends Component{
    render(){
        let {content,title,author,create_at} = this.props.data;
        let loadding = this.props.loadding;
        const cTitle =(
            <div>
                <h1>{title}</h1>
                <div
                    style = {
                        {
                            display : 'flex',
                            alignItems : "center"
                        }
                    }
                >
                    <TxtTag data ={this.props.data} />
                    <Avatar src={author.avatar_url}/>
                    <Link to = {"/user/" + author.loginname}>{author.loginname}</Link>
                     发表于: {create_at.split("T")[0]}
                </div>
            </div>
        );
        return (
            <Card 
                title = {cTitle}
                loadding = {loadding}
            >
                    <div 
                        dangerouslySetInnerHTML = {
                            {
                                __html :content
                            }
                        }
                    >
                    </div>
          </Card>
        );
    }
}