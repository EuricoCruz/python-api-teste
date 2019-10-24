import React, { Component } from 'react';
import './ShowProducts.css'
import Axios from 'axios';
import { Link } from "react-router-dom";

class ShowProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  getProducts = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/produtos`)
      .then(response => {
        this.setState({
          products: response.data
        })
      })
      .catch(error => console.log(error))
  }

  deleteProduct = (product) => {
    Axios.delete(`${process.env.REACT_APP_API_URL}/produtos/${product._id}`)
    .then(() => this.getProducts())
  }

  componentDidMount() {
    this.getProducts()
  }
  
  render(){
    if(this.state.products.length <= 0) {
      return (
        <div>
          <h1 className="title is-1 main-title">Não há produtos registrados</h1>
          <Link to='/add'>
          <button className="button">Adicionar produto</button>
          </Link>
        </div>
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
                    <td>
                <Link to={`product/${product._id}`}>
                  {product._nome}
                </Link>
                  </td>
                <td>{product._quantidade}</td>
                <td>R$ {product._preco}</td>
                <td>{product._codigo}</td>
                <td>{product._categoria}</td>
                
                  <td><Link to={`/edit/${product._id}`}><button className="button">Editar</button></Link></td>
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