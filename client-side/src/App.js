import React from 'react';
import AddProductForm from './components/AddProductForm/AddProductForm'
import ShowProducts from './components/ShowProducts/ShowProducts'
import EditProduct from './components/EditProduct/EditProduct'
import Login from './components/Login/Login'

function App() {
  return (
    <div className="App">
      <Login/>
      <ShowProducts />
      <AddProductForm />
      <EditProduct />
    </div>
  );
}

export default App;
