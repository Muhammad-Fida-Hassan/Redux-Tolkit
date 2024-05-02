import logo from './logo.svg';
import './App.css';
import products from './products.json';
import Product from './product.jsx';
import Cart from './cart.jsx';


function App() {
  return (
    <div className="App">
    <Cart />    
    <div className="products">
    {products.map((product) => (
      <Product {...product} />
    ))}
  </div>
  </div>
  );
}

export default App;
