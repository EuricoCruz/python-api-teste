import React, { Component } from 'react';
import './ShowProducts.css'
import Axios from 'axios';

class ShowProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  getProducts = () => {
    Axios.get('http://127.0.0.1:5000/produtos')
      .then(response => {
        this.setState({
          products: response.data
        })
      })
  }

  deleteProduct = () => {
    Axios.delete('http://127.0.0.1:5000/produtos/5daf0c8a7077abd2757b1003')
  }

  componentDidMount() {
    this.getProducts()
    console.log(this.state.products)
  }
  render(){
    if(this.state.products.length <= 0) {
      return (
        <h1 className="title is-1 main-title">Não há produos registrados</h1>
      )
    } else {
      console.log(this.state.products)
      return(
      <div>
        <h1 className="title is-1 main-title">Produtos em estoque</h1>  
        <table className="table is-bordered">
          <thead>
            <tr>
              <td>Nome</td>
              <td>quantidade</td>
              <td>Preço</td>
              <td>Código</td>
              <td>Categoria</td>
              <td>editar</td>
              <td>deletar</td>
            </tr>
          </thead>
          <tbody>
              {this.state.products.map((product, key) =>
              <tr>
                <td>{product._nome}</td>
                <td>{product._quantidade}</td>
                <td>{product._preco}</td>
                <td>{product._codigo}</td>
                <td>{product._categoria}</td>
                <td><input className="button" type="submit" value="Editar"/></td>
                <td><input className="button" type="submit" value="Deletar" onClick={e => this.deleteProduct(e)}/> </td>
              </tr>)} 
          </tbody>
        </table>
      </div>

      )
    }
  }
}

export default ShowProducts