import React, { Component } from 'react';
import { Link } from "react-router-dom"
import ShowProducts from '../ShowProducts/ShowProducts';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      user: '',
      password: ''
    }
  }

  render() {
    return(
      <div>

      <h1 className="title is-1 main-title">Bem-vindo</h1>
      <h2 className="title is-2">Faça o login</h2>
      <form >
        <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira o nome do produto' name="user" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Insira a quantidade' name="password" />
            </div>
        </div>
        <Link to={'/showProducts'}>
          <input className="button" type="submit" value="Entrar"/>
        </Link>
      </form>
      </div>
    )
  }
}

export default Login;