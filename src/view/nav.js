import React,{Component} from "react";
import {Menu,Icon} from "antd";
import {Link,withRouter} from "react-router-dom";
class Nav extends Component{
    constructor(arg){
        super(arg);
        let now = this.getData(this.props.location)
        this.state = {
            now
        }
    }
    getData(location){
        return location.pathname.split("/")[1];
    }
    shouldComponentUpdate(nextProps){
        let now =  this.getData(nextProps.location)
        if(this.state.now !== now){
            this.setState({
                now
            })
            return false;
        }
        return true;
    }
    render(){
        let {mode,id} = this.props;
        return(
            <Menu mode={mode} id={id} 
                selectedKeys ={[this.state.now]}
            >
                            <Menu.Item key = "index">
                                <Link to="/index/all"><Icon type="home"/>首页</Link>
                            </Menu.Item>
                            <Menu.Item key = "book">
                                 <Link to="/book"><Icon type="book"/>教程</Link>
                            </Menu.Item>
                            <Menu.Item key = "about">
                                 <Link to="/about"><Icon type="info-circle-o"/>关于</Link>
                            </Menu.Item>
                        </Menu>
        );
    }
}
export default withRouter((props)=>{
    return <Nav
        mode = {props.mode}
        id   = {props.id}
        location = {props.location}
    > </Nav>;
});