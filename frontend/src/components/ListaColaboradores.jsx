import React, { Component } from "react"
import ReactTable from "react-table"
import axios from "axios"
import {Link} from "react-router-dom"

import 'react-table/react-table.css'

const baseUrl = "http://localhost:3001/collaborator";

export default class ListaColaboradores extends Component {

  constructor() {
    super()
    this.state = {
      list_collaborator: []
    }
    this.onRemove = this.onRemove.bind(this)    
  }

  componentDidMount()
  {
    axios(baseUrl).then( resp => {
      this.setState({ list_collaborator: resp.data });      
    })
  }

  onRemove(event)
  {
    const id = event.target.value
    axios.delete(baseUrl+'/'+id).then( resp => {     
            
    })
  }
 
  render() {     
    const data = this.state.list_collaborator

    const columns = [{
      Header: 'Nome',
      accessor: 'name' 
    }, {
      Header: 'Tipo Colaborador',
      accessor: 'id_type_collaborator',      
    }, {
      Header: 'Aniversario',
      accessor: 'birthday'
    }, {
      Header: 'Area de Atuação',
      accessor: 'id_occupation'
    }, {
      Header: 'E-mail',
      accessor: 'email'
    }, {
      Header: 'Telefone Fixo',
      accessor: 'phonenumber'
    }, {
      Header: 'Celular/Zap',
      accessor: 'mobile'
    }, {
      Header: 'Foto',
      accessor: 'photo'
    }, {
      Header: 'Ações',
      accessor:'id',
      Cell: row => (
        <div>
          <Link to={`/colaboradores/${row.value}`}><button className="btn btn-primary btn-sm"><span className="fa fa-edit"></span> Editar</button></Link> &nbsp;
          <button className="btn btn-danger btn-sm" onClick={this.onRemove} value={row.value} ><span className="fa fa-close"></span> Excluir</button>
        </div>
      ),
      width: 160
    }]
    
    
    return (
      <React.Fragment >
        <div className="alert alert-danger" role="alert">
          Collaborador Excluido com Sucesso
        </div>
        <div className="card">
          <div className="card-header alert-primary">
            LISTA DE COLABORADORES
          </div>
          <div className="card-body"> 
            <Link to={'/colaboradores'}><button className="btn btn-primary btn-sm"><span className="fa fa-plus"></span> Adicionar</button></Link> &nbsp;        
            <br /><br />
            <ReactTable data={data} columns={columns} className="-striped -highlight" defaultPageSize={5}/>          
            <br />
            <br />

            <Link className="btn btn-primary mr-3" to="/">Voltar</Link>
            <button className="btn btn-primary">Salvar</button>
          </div>
        </div>
      </React.Fragment >
    );
  }
}
