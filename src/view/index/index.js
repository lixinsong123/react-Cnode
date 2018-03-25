import React,{Component} from 'react';
import {Row,Col} from "antd";
import IndexMenu from "./indexMenu";
import List from "./list";
class Index extends Component{
    render(){
        let tab = this.props.match.params.id;
        return(
            <Row className="wrap">
              <Col md={6} xs = {0} className="indexSider">
                <IndexMenu id="indexMenu" mode="vertical"/>
              </Col>
              <Col md={0} xs = {24}>
                <IndexMenu id="indexXXMenu"  mode="horizontal" />
              </Col>
              <Col
                id="indexList"
                md={18}
                xs={24}
               >
              <List tab = {tab}></List>
              </Col>
            </Row>
        );
    }
}

export default Index;