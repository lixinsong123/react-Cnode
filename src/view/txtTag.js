import React,{Component} from 'react';
import {Tag} from 'antd';

const tab ={
    good : {
        color : "geekblue",
        txt   : "精华"
    },
    top  : {
        color : "magenta",
        txt   : "置顶"
    },
    job  : {
        color : "cyan",
        txt   : "招聘"
    },
    ask  : {
        color : "green",
        txt   : "问答"
    },
    dev  : {
        color : "lime",
        txt   : "测试"
    },
    share: {
        color : "red",
        txt   : "分享"
    }
}
class TxtTag extends Component {
    getTab(data){
       return (
           data.top ? "top" :
                data.good  ? "good" :
                  data.tab
       );
    }
    render(){
        let price = this.getTab(this.props.data);
        if(price){
            let {color,txt} =tab[price]; 
            return (
                <Tag color = {color}>
                    {txt}
                </Tag>
            );
        }
        return false;
    }
}
export default TxtTag;