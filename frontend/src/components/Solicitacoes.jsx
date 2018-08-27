import React, { Component } from 'react';

export default class Solicitacoes extends Component
{  
  render()
  {
    return(
      <div className="card">
        <div className="card-header alert-primary">
          CADASTRO DE SOLICITAÇÕES
        </div>
        <div className="card-body">

          <div className="row">
            <div className="form-group col-sm-4">
              <label>Nome</label><input type="text" className="form-control"/>
            </div>
            <div className="form-group col-sm-2">
              <label>Tipo Colaborador</label><select className="form-control"></select>
            </div>
            <div className="form-group col-sm-2">
              <label>Data Aniversário</label><input type="text" className="form-control"/>
            </div>
            <div className="form-group col-sm-4">
              <label>Area Atuação</label><select className="form-control"></select>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-sm-2">
              <label>Cep</label><input type="text" className="form-control"/>
            </div>
            <div className="form-group col-sm-3">
              <label>Logradouro</label><input type="text" className="form-control"/>
            </div>
            <div className="form-group col-sm-2">
              <label>Bairro</label><input type="text" className="form-control"/>
            </div>
            <div className="form-group col-sm-2">
              <label>Número</label><input type="text" className="form-control"/>
            </div>
            <div className="form-group col-sm-3">
              <label>Complemento</label><input type="text" className="form-control"/>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-sm-12">
              <label>Descrição da Solcitação</label><textarea className="form-control"></textarea>
            </div>
          </div>
          
          <br/>
          <a href="" className="btn btn-primary mr-3">Voltar</a>
          <a href="" className="btn btn-primary">Salvar</a>
        </div>
      </div>
    );
  }  
}