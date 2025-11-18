import React from 'react';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import BookInfo from './pages/BookInfo.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { books } from './data.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books}  />} />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
