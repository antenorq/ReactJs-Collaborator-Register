import React, { Component } from "react"
import Header from "./components/Header.jsx"
import Menu from "./components/Menu.jsx"
import Routes from "./components/Routes.jsx"
import {BrowserRouter} from "react-router-dom"


import "jquery/dist/jquery.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment >
          <Header />
          <Menu />
          <Routes />
        </React.Fragment >
      </BrowserRouter>
    );
  }
}
