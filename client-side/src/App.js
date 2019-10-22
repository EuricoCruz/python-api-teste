import React from 'react';
import AddProductForm from './components/AddProductForm/AddProductForm'
import ShowProducts from './components/ShowProducts/ShowProducts'

function App() {
  return (
    <div className="App">
      <ShowProducts />
      <AddProductForm />
    </div>
  );
}

export default App;
