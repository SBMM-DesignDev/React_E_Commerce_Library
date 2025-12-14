import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { books } from './data';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState ([]);

  function addToCart (book) {
    setCart([...cart, {...book, quantity: 1}]);
   
  }

  function changeQuantity(book) {

  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}  />
        <Route path="/books" exact render={() => <Books books={books}  />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} />} />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
