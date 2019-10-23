import React, { Component } from 'react';
import './ShowProducts.css'
import Axios from 'axios';
import { Link } from "react-router-dom";
import bulma from "bulma"

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

  deleteProduct = (product) => {
    Axios.delete(`http://127.0.0.1:5000/produtos/${product._id}`)
    .then(() => this.getProducts())
  }

  componentDidMount() {
    this.getProducts()
  }
  render(){
    if(this.state.products.length <= 0) {
      return (
        <h1 className="title is-1 main-title">Não há produos registrados</h1>
      )
    } else {
      return(
      <div className="container">
        <div className='notification'>

        <h1 className="title is-1 main-title">Produtos em estoque</h1>  
        <table className="table is-bordered container">
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
                <td>R$ {product._preco}</td>
                <td>{product._codigo}</td>
                <td>{product._categoria}</td>
                
                  <td><Link to={`/edit/${product._id}`}><button class="button">Editar</button></Link></td>
                <td><input className="button" type="submit" value="Deletar" onClick={(e) => this.deleteProduct(product)}/> </td>
              </tr>)} 
          </tbody>
        </table>
        <Link to='/add'>
          <button className="button">Adicionar produto</button>
        </Link>
        </div>
      </div>

      )
    }
  }
}

export default ShowProducts