import React,{Component} from "react";
import {Menu} from "antd";
import {Link,withRouter} from "react-router-dom";
const data = [
    {
        tab : 'all',
        txt : '全部'
    },{
        tab : 'good',
        txt : '精华'
    },{
        tab : 'ask',
        txt : '问题'
    },{
        tab : 'share',
        txt : '分享'
    },{
        tab : 'job',
        txt : '招聘'
    },{
        tab : 'dev',
        txt : '测试'
    }
];
class IndexMenu extends Component{
    constructor(arg){
        super(arg);
        let now = this.getTab(this.props.location);
        this.state = {
            now
        };
    }
    getTab(location){
        let now = location.pathname.split("/")[2];
        return now;
    }   
    shouldComponentUpdate(nextProps){
        let now = this.getTab(nextProps.location);
        if(this.state.now !== now){
            this.setState({now});
            return false;
        }
        return true;
    }
    render(){
         let {id,mode} = this.props;
        return(
            <div>
                  <Menu 
                     id = {id}
                     mode={mode}
                     selectedKeys = {[this.state.now]}
                     >
                     {
                         data.map((item)=>{
                            return (
                                <Menu.Item key ={item.tab}>
                                    <Link to={"/index/"+item.tab}>{item.txt}</Link>
                                </Menu.Item>
                            );
                         }) 
                     }
                 
                </Menu>
            </div>
        );
    }
}
export default withRouter((props)=>{
    return <IndexMenu
        mode = {props.mode}
        id   = {props.id}
        location = {props.location} 
    />
});