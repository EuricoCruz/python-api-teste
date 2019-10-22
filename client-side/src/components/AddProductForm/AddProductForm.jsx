import React, { Component } from 'react';
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
    const {nome, quantidade, preco, codigo, categoria} = this.state;
    axios.post('http://127.0.0.1:5000/produtos', {nome, quantidade, preco, codigo, categoria});
  } 

  handleChange= (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {

    return(
        <div onSubmit={this.handleFormSubmit}>
        <h1 className="title is-1 main-title">Adicione um novo produto</h1>
        <form >
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
        </form>
      </div>
    )
  }
}

export default AddProductForm 