import React, { Component } from 'react';
import { Link } from "react-router-dom"
import bulma from 'bulma'
import './AddProductForm.css'
import axios from 'axios'

class AddProductForm extends Component {
  construtor() {
    this.state = {
      nome:'',
      quantidade: '',
      preco: '',
      codigo: '',
      categoria: '', 
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {id, nome, quantidade, preco, codigo, categoria} = this.state;
    axios.post(`${process.env.REACT_APP_API_URL}/produtos`, {nome, quantidade, preco, codigo, categoria});
  } 

  handleChange= (event) => {
    this.setState({
      [event.target.name]: event.target.value,
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
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira a quantidade' name="quantidade" 
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o preço' name="preco" 
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o código do produto' name="codigo" 
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira a categoria do produto' name="categoria" 
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <input className="button" type="submit" value="Adicionar"/>
          <Link to='/showProducts'>
            <button className="button">Verificar produtos</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default AddProductForm 