import React, { useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";


const productsArr = [];

function App() {
  const [searchValue, setSearchValue] = useState('');

  console.log(searchValue)
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;