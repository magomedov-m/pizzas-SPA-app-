import React, { useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { decrement, increment, name, inputVal } from "./redux/counterSlice";
export const SearchContext = React.createContext();

console.log(SearchContext);

const productsArr = [];

function App() {
  const [searchValue, setSearchValue] = useState("");

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  console.log(searchValue);
  return (
    <div className="wrapper">
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <h1>{name}</h1>
        <h1>{inputVal}</h1>
        <input className="input" />
        <button onClick={() => dispatch(inputVal())}>addInput</button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider> */}
    </div>
  );
}

export default App;
