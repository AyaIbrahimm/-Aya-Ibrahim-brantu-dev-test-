import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import {BrowserRouter,Route,Link, useHistory} from 'react-router-dom'
import CreateProductScreen from './Screens/CreateProductScreen';
function App() {
 
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <Link to="/" style={{ color: '#FFF' }}>  BRANTU </Link>
      <Link className="linkcreate" type="submit" to="/products" style={{ color: '#FFF' }} >Create Product</Link>
     
      
    </header>  
    
    <main className="main">
      <div className="content">
        <Route path="/products" component={CreateProductScreen}></Route>
        <Route path="/product/:id"  component={ProductScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
             </div>
    </main>

    <footer className="footer">
          All rights deserved.
    </footer>
    
  </div>
  </BrowserRouter>
  );
}

export default App;
