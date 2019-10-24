import React, { Component } from 'react';
import Axios from 'axios'

class OneProduct extends Component {
  constructor() {
    super()
    this.state = {
      product: {}
    }
  }

  getProduct = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/produtos/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          product: response.data
        })
      })
  }

  componentDidMount() {
    this.getProduct()
  }
  
  render() {
    if(this.state.product == {}) {
      return(
        <h1>produto</h1>
      )
    } else {
      return(
        <div className='container notification'>          
          <h1>Produto: {this.state.product._nome}</h1>
          <h2>Quantidade: {this.state.product._quantidade}</h2>
          <h2>Preço: R${this.state.product._preco} </h2> 
          <h2>Código: {this.state.product._codigo}</h2>
          <h2>Categoria: {this.state.product._categoria}</h2>
        </div>
      )
    }
  }
}

export default OneProduct