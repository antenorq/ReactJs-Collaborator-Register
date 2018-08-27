import React, { Component } from 'react'
import {Link} from "react-router-dom"
import './css/menu_option.css'

export default class MenuOption extends Component
{
  render()
  {
    return(
      <Link className="nav-link" to={this.props.url}>
        <div id="area_menu_option" className="mt-3 mb-3">
          <div className="icon"><img src={this.props.icon} alt="icon" className="img-fluid" /></div>
          <div className="text_option">{this.props.text}</div>
        </div>
      </Link>      
    );
  } 
}