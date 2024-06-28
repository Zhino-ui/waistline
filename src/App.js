import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home';
import Contact from './Contact';
import Clothing from './Clothing';
import Shorts from './Shorts';
import Trousers from './Trousers';
import Kaftan from './Kaftan';
import NoPage from './NoPage';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="/clothing" index element={<Clothing/>} />
          <Route path="/clothing/:id" element={<ProductDetail/>} />
          <Route path="/contact" index element={<Contact/>} />
          <Route path="*" index element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
