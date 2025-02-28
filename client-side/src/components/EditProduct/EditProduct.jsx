import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import bulma from 'bulma'
import axios from 'axios'

class EditProduct extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      nome:'',
      quantidade: '',
      preco: '',
      codigo: '',
      categoria: '', 
      hasMessage: false,
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {id, nome, quantidade, preco, codigo, categoria} = this.state;
    axios.put(`${process.env.REACT_APP_API_URL}/produtos/${this.props.match.params.id}`, {id, nome, quantidade, preco, codigo, categoria})
    .then((item) => {
      this.setState({
        hasMessage: true,
      })
    })
  } 

  handleChange= (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      hasMessage: false,
    })
  }

  getProduct = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/encontrar/${this.props.match.params.id}`)
    .then((product) => {
      const {_id, _nome, _quantidade, _preco, _codigo, _categoria } = product.data
      this.setState({
        id: _id,
        nome: _nome,
        quantidade: _quantidade,
        preco: _preco,
        codigo: _codigo,
        categoria: _categoria
      })
    })
  }

  componentDidMount() {
    this.getProduct()
  }

  render() {
    return(
      <div className='notification container'>
        <h1 className="title is-1 main-title">Atualizar Produto</h1>
        <form onSubmit={this.handleFormSubmit}>
        <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" value={this.state.nome} placeholder='Insira o nome do produto' name="nome"
              onChange={e => this.handleChange(e)} required/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" value={this.state.quantidade}  placeholder='Insira a quantidade' name="quantidade" 
              onChange={e => this.handleChange(e)} required/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o preço' value={this.state.preco}  name="preco" 
              onChange={e => this.handleChange(e)} required/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o código do produto' value={this.state.codigo} name="codigo" 
              onChange={e => this.handleChange(e)} required/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira a categoria do produto' value={this.state.categoria}  name="categoria" 
              onChange={e => this.handleChange(e)} required/>
              {this.state.hasMessage && <span>Produto {this.state.nome} editado com sucesso</span>}
            </div>
          </div>
          <input className="button" type="submit" value="Atualizar"/>
          <Link to='/showProducts'>
            <button className="button">Verificar produtos</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default EditProduct