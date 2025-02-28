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
      <div className='container notification'>

      <h1 className="title is-1 main-title">Bem-vindo</h1>
      <h2 className="title is-2">Faça o login</h2>
      <form >
        <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Digite seu email' name="user" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder='Digite sua senha' name="password" />
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