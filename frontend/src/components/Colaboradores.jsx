import React, { Component } from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const baseUrl = "http://localhost:3001/collaborator";
const url_type_collaborator = "http://localhost:3001/type_collaborator";
const url_occupation = "http://localhost:3001/occupation";

export default class Colaboradores extends Component {

  constructor() {
    super()
    this.state = {

      collaborator:{
        id:"",
        name: "",
        photo: "",
        birthday: "",      
        email: "",
        phonenumber: "",
        mobile:"",
        id_address: "",
        id_occupation: "",
        id_type_collaborator: ""
      },

      list_type_collaborator: [],
      list_occupation:[]
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const target = event.target;    
    const name = target.name;
    const value = target.value;

    let array_collaborator = this.state.collaborator;
    array_collaborator[name] = value;

    this.setState({ collaborator: array_collaborator })
  }

  onSave() {
    const collaborator = {...this.state.collaborator}    
    const method = collaborator.id ? 'put' : 'post'
    const url = collaborator.id ? `${baseUrl}/${collaborator.id}` : baseUrl    
    axios[method](url,collaborator).then(resp => {
      //$('.alert').show();
    })
  }

  componentDidMount()
  {
    //Get type Collaborator
    axios(url_type_collaborator).then( resp => {
      this.setState({ list_type_collaborator: resp.data });      
    })
    //Get occupation
    axios(url_occupation).then( resp => {
      this.setState({ list_occupation: resp.data });      
    })

    if(this.props.match.params.id)
    {
      //Get especific collaborator 
      axios(baseUrl+'/'+this.props.match.params.id).then( resp => {     
        this.setState({collaborator:resp.data})       
      })
    }
  
  }

  renderOptions(list,selected)
  {    
    return list.map(item => {
      if(selected == item.id){
        return <option selected='selected' key={item.id} value={item.id}>{item.description}</option>
      }
      else{
        return <option key={item.id} value={item.id}>{item.description}</option>
      }      
    })
  }

  render() {
    return (
      <React.Fragment >
        <div className="alert alert-success" role="alert">
          Colaborador Cadastrado com Sucesso
        </div>
        <div className="card">
          <div className="card-header alert-primary">
            CADASTRO DE COLABORADORES          
          </div>
          <div className="card-body">
            <div className="row">
              <div className="form-group col-sm-4">
                <label>Nome</label>
                <input type="text" className="form-control" name="name" value={this.state.collaborator.name} onChange={this.onChange} />
              </div>
              <div className="form-group col-sm-2">
                <label>Tipo Colaborador</label>
                <select className="form-control" name="id_type_collaborator" defaultValue={this.state.collaborator.id_type_collaborator} onChange={this.onChange}>
                  <option>Selecione</option>
                  {this.renderOptions(this.state.list_type_collaborator,this.state.collaborator.id_type_collaborator )}
                </select>
              </div>            
              <div className="form-group col-sm-2">
                <label>Data Aniversário</label>
                <input type="text" className="form-control" name="birthday" value={this.state.collaborator.birthday} onChange={this.onChange} />
              </div>
              <div className="form-group col-sm-4">
                <label>Area Atuação</label>
                <select className="form-control" name="id_occupation" defaultValue={this.state.collaborator.id_occupation} onChange={this.onChange}>
                  <option>Selecione</option>
                  {this.renderOptions(this.state.list_occupation,this.state.collaborator.id_occupation)}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-sm-4">
                <label>Email</label>
                <input type="text" className="form-control" name="email" value={this.state.collaborator.email} onChange={this.onChange} />
              </div>
              <div className="form-group col-sm-2">
                <label>Telefone Fixo</label>
                <input type="text" className="form-control" name="phonenumber" value={this.state.collaborator.phonenumber} onChange={this.onChange} />
              </div>
              <div className="form-group col-sm-2">
                <label>Celular / Whatsapp</label>
                <input type="text" className="form-control" name="mobile" value={this.state.collaborator.mobile} onChange={this.onChange} />
              </div>
              <div className="form-group col-sm-4">
                <label>Foto</label>
                <input type="text" className="form-control" name="photo" value={this.state.collaborator.photo} onChange={this.onChange} />
              </div>
            </div>

            <hr/>

            <div className="row">
              <div className="form-group col-sm-2">
                <label>Cep</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-sm-3">
                <label>Logradouro</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-sm-2">
                <label>Bairro</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-sm-2">
                <label>Número</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-sm-3">
                <label>Complemento</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <br />
            <Link className="btn btn-primary mr-3" to="/">Voltar</Link>
            <button className="btn btn-primary" onClick={this.onSave}>Salvar</button>
          </div>
        </div>
      </React.Fragment >
    );
  }
}
