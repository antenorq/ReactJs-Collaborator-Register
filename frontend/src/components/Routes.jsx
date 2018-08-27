import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";

import Dashboard from "./Dashboard.jsx";
import Colaboradores from "./Colaboradores.jsx";
import Solicitacoes from "./Solicitacoes.jsx";
import ListaColaboradores from "./ListaColaboradores.jsx";
import ListaSolicitacoes from "./ListaSolicitacoes.jsx";


export default class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Switch>        
          <Route exact path={'/'} component={Dashboard} />          
          <Route path={'/colaboradores/:id'} component={Colaboradores} />
          <Route path={'/colaboradores'} component={Colaboradores} />          
          <Route path={'/lista_colaboradores'} component={ListaColaboradores} />
          <Route path={'/solicitacoes'} component={Solicitacoes} />
          <Route path={'/lista_solicitacoes'} component={ListaSolicitacoes} />
          <Redirect from="*" to="/" />
        </Switch>               
      </div>       
    );
  }
}
