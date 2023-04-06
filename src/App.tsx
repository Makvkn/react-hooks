import React, {createContext, useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import {Route, Routes} from "react-router-dom";
import UseState from "./pages/hooks/useState/UseState";
import UseEffect from "./pages/hooks/useEffect/UseEffect";
import Main from "./pages/hooks/useContext/Main";
import OurHooks from "./pages/hooks/ourHooks/OurHooks";
import UseReducer from "./pages/hooks/useReducer/UseReducer";
import UseRef from "./pages/hooks/useRef/useRef";

function App() {

  return (
    <div className="App">
        <Menu />
      <header className="App-header">
        <Routes>
            <Route path="/useState" element={<UseState/>}/>
            <Route path="/useEffect" element={<UseEffect/>}/>
            <Route path="/useContext" element={<Main/>}/>
            <Route path="/ourHooks" element={<OurHooks/>}/>
            <Route path="/useReducer" element={<UseReducer/>}/>
            <Route path="/useRef" element={<UseRef/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;