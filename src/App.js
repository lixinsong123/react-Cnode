import React, { Component } from 'react';

//import RouterIndex from "./router/index";
import MainHeader from "./view/main-header";
import MainFooter from "./view/main-footer";
import './view/index.css';
import RouterIndex from "./router/index";
class App extends Component {
  render() {
    return (
      <div className="pageWrap">
          <MainHeader />
          <div className="main">
              <RouterIndex/>
          </div>
          <MainFooter />
      </div>
    );
  }
}

export default App;
