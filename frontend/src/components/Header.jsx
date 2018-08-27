import React, { Component } from "react";
import "./css/header.css";

export default class Header extends Component {
  render() {
    return (
      <header id="area_header" className="mb-4" style={{ backgroundImage: "url('" + process.env.PUBLIC_URL + "/images/back_blue.jpg')" }} >
        {/*d-none d-md-block*/}
      </header >
    );
  }
}
