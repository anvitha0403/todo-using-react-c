import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox'
import All from "./All"
import Nav from "./nav"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Active from "./Active"
import Completed from './Completed';
import { useEffect } from 'react';
function App() {
   
  return (
    <BrowserRouter>
      <div className="App ">
        <div className="container">
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<All  />}
            ></Route>
            <Route path="/active" element={<Active />}></Route>
            <Route path="/done" element={<Completed  />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
