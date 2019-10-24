import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './AddProductForm.css'
import axios from 'axios'

class AddProductForm extends Component {
  constructor() {
    super();
    this.state = {
      nome:'',
      quantidade: '',
      preco: '',
      codigo: '',
      categoria: '', 
      hasMessage: false,
      message: `Produto adicionado com sucesso`
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {nome, quantidade, preco, codigo, categoria} = this.state;
    axios.post(`${process.env.REACT_APP_API_URL}/produtos`, {nome, quantidade, preco, codigo, categoria})
    .then((item) => { 
      this.setState({
        hasMessage: true,
      })
    })
  } 

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      hasMessage:false
    })
  }

  render() {
    return(
      <div className='container notification'>
        <h1 className="title is-1 main-title">Adicione um novo produto</h1>
        <form onSubmit={this.handleFormSubmit}>
        <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o nome do produto' name="nome" 
              onChange={e => this.handleChange(e)} required/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira a quantidade' name="quantidade" 
              onChange={e => this.handleChange(e)} required />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o preço' name="preco" 
              onChange={e => this.handleChange(e)} required/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o código do produto' name="codigo" 
              onChange={e => this.handleChange(e)} required/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira a categoria do produto' name="categoria" 
              onChange={e => this.handleChange(e)} required/>
              {this.state.hasMessage && <span>Produto {this.state.nome} adicionado com sucesso</span>}
            </div>
          <input type='reset' value='Limpar todos os campos'/>
          </div>
          <input className="button" type="submit" value="Adicionar" required/>
          <Link to='/showProducts'>
            <button className="button">Verificar produtos</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default AddProductForm 