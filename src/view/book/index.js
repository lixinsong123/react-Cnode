import React,{Component} from 'react';
import data  from './data';
import Public_Card from "../Public_Card";
class Book extends Component{
    render(){
        return(
            <div className="wrap">
             {data.map(item =>{
                return (
                    <Public_Card key ={item.title}  title = {item.title} content = {item.content}></Public_Card>
                );
                 })
             }                
            </div>
        );
    }
}

export default Book;