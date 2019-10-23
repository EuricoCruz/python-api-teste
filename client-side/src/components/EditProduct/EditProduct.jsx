import React, { Component } from 'react';
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
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {id, nome, quantidade, preco, codigo, categoria} = this.state;
    axios.put(`http://127.0.0.1:5000/produtos/${this.props.match.params.id}`, {id, nome, quantidade, preco, codigo, categoria});
  } 

  handleChange= (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  getProduct = () => {
    axios.get(`http://127.0.0.1:5000/encontrar/${this.props.match.params.id}`)
    .then((product) => {
      const {_id, _nome, _quantidade, _preco, _codigo, _categoria } = product.data
      console.log(product.data)
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
      <div>
        <h1 className="title is-1 main-title">Atualizar Produto</h1>
        <form onSubmit={this.handleFormSubmit}>
        <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" value={this.state.nome} placeholder='Insira o nome do produto' name="nome"
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" value={this.state.quantidade}  placeholder='Insira a quantidade' name="quantidade" 
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o preço' value={this.state.preco}  name="preco" 
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o código do produto' value={this.state.codigo} name="codigo" 
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira a categoria do produto' value={this.state.categoria}  name="categoria" 
              onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <input className="button" type="submit" value="Atualizar"/>
        </form>
      </div>
    )
  }
}

export default EditProduct