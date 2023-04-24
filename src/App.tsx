import React, {createContext, useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import {Route, Routes} from "react-router-dom";
import UseState from "./pages/hooks/useState/UseState";
import UseEffect from "./pages/UseEffect";
import Main from "./pages/hooks/useContext/Main";


function App() {
  return (
    <div className="App">
        <Menu />
      <header className="App-header">
        <Routes>
            <Route path="/useState" element={<UseState/>}/>
            <Route path="/useEffect" element={<UseEffect/>}/>
            <Route path="/useContext" element={<Main/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;