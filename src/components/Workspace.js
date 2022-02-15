import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Workspace extends React.Component {
  constructor(props){
    super(props);
    this.item = this.props.item;
    this.index = this.props.item;
  }

  render() {
    
    return (
        <>
          <li key={this.index} className="nav-text">
                <Link to={this.item.Name + '/' + this.item.PagesMap[this.item.DefaultPageId].Name}>
                  <i className={'fa fa-' + this.item.Image}></i>
                  <span>{this.item.Title}</span>
              </Link>
          </li>
        </>
    );
  }
}

export default Workspace;
