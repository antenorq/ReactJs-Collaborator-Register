import React, { Component } from "react"
import {Link} from "react-router-dom"


export default class Menu extends Component {
  render() {
    return (
      <nav className="container navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a className="navbar-brand" href="">
          Felipe Lucas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                INÍCIO 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usuarios">
                USUÁRIOS 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="lista_colaboradores">
                COLABORADORES 
              </Link>
            </li>            
            <li className="nav-item">
              <Link className="nav-link" to="solicitacoes">
                SOLICITAÇÕES 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
