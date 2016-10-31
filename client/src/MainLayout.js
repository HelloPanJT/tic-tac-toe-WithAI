import React, { Component } from 'react';

import logo from './color.jpg';
import './MainLayout.css';

class MainLayout extends Component {

  render() {
    return (
  <div>
    <nav id="header-nav" className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <img src={logo} className="MainLayout__logo pull-left" alt="logo" />
          <div className="navbar-brand">
              <h1>Welcome to our movie website</h1>
          </div>
        </div>
      </div>
    </nav>  
     <div>
       {this.props.children}
      </div> 
  </div>
    );
  }
}

export default MainLayout;
