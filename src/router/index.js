import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import Index  from "../view/index";
import Book   from "../view/book";
import About  from "../view/about";
import User   from  "../view/user";
import Details from "../view/details";
class RouterIndex extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact render={()=>{
                        return<Redirect to="/index/all"/>
                }}>
                </Route>
                <Route path="/index/:id" component={Index}></Route>
                <Route path="/book" component={Book}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/user/:name" component={User}></Route>
                <Route path="/details/:id" component={Details}></Route>
            </Switch>
        );
    }
}

export default RouterIndex;