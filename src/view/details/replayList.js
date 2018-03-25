import React,{Component} from "react";
import {Card,Avatar,List} from "antd";
import {Link} from "react-router-dom";
class ReplayList extends Component {
    render(){
        let {replies,repliesCount,loading} = this.props;
        return (
            <Card
                loading = {loading}
                title = {repliesCount+"条回复"}
                type = "inner"
                
            >
                <List
                    id = "replayList"
                    dataSource = {replies}
                    itemLayout = "vertical"
                    renderItem = {item=>(<List.Item
                            key = {item.id}
                            extra = {
                                item.ups.length>0?<span>有{item.ups.length}人觉得这个回复很赞</span>:""
                            }
                        >
                            <List.Item.Meta
                                avatar = {<Avatar src={item.author.avatar_url}/>}
                                description = {<p><Link to={"/user"+item.author.id}>{item.author.loginname}</Link>
                                   <span> 發表于: {item.create_at.split("T")[0]}</span>
                                </p>
                            }
                            >
                            </List.Item.Meta>
                            <div
                                    dangerouslySetInnerHTML = {
                                        {
                                            __html : item.content
                                        }
                                    }
                                >
                                        
                                </div>
                        </List.Item>)
                    }
                >
                </List>
           </Card>
        );
    }
}
export default ReplayList;