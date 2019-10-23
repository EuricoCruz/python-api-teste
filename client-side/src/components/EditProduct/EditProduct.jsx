import React, { Component } from 'react';
import bulma from 'bulma'
import axios from 'axios'

class EditProduct extends Component {
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

  getProduct = () => {
    axios.get(`http://127.0.0.1:5000/encontrar/${this.props.match.params.id}`)
    .then((product) => {
      this.setState({
        nome: product._nome,
        quantidade: product._quantidade,
        preco: product._preco,
        codigo: product._codigo,
        categoria: product._categoria
      })
      console.log(product)
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
          <input className="button" type="submit" value="Atualizar"/>
        </form>
      </div>
    )
  }
}

export default EditProduct