import React,{Component} from 'react';
import {Card} from "antd";
class Public_Card extends Component{
    render(){
        return(
            <Card
            title = {this.props.title}
            type  = "inner"
        >
            <div
                dangerouslySetInnerHTML = {
                    {
                        __html :this.props.content
                    }
                }
            >
            </div>
        </Card>
        );
    }
}

export default Public_Card;