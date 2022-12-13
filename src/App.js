import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Main, Footer } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} ></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App;
