import React from 'react';
import AddProductForm from './components/AddProductForm/AddProductForm'
import ShowProducts from './components/ShowProducts/ShowProducts'
import EditProduct from './components/EditProduct/EditProduct'
import OneProduct from './components/OneProduct/OneProduct'
import Login from './components/Login/Login'
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/showProducts' component={ShowProducts} />
        <Route exact path='/product/:id' component={OneProduct} />
        <Route exact path= '/add' component={AddProductForm} />
        <Route exact path='/edit/:id' component={EditProduct} />
      </Switch>
    </div>
  );
}

export default App;
