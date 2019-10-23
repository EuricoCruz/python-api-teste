import React from 'react';
import AddProductForm from './components/AddProductForm/AddProductForm'
import ShowProducts from './components/ShowProducts/ShowProducts'
import EditProduct from './components/EditProduct/EditProduct'
import Login from './components/Login/Login'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Login/>
      <ShowProducts />
      <AddProductForm />
      <Switch>
        <Route exact path='/edit/:id' component={EditProduct} />
      </Switch>
    </div>
  );
}

export default App;
