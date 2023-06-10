import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'

import Linhalivro from './LivroLista';
import { Router } from 'react-router-dom';
import LivroDados from './LivroDados';
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Linhalivro/>
      </div>
  );
}

export default App;
