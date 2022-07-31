import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg3 from "./Components/Reg3";
import Reg2 from "./Components/Reg2";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Reg2" element={<Reg2 />} />
          <Route path="/Reg3" element={<Reg3 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
