import React from 'react';
import api from './services/api';

import './App.css';
import './global.css';
import './Main.css';
import './Header.css';
import './Aside.css';

import Cabecalho from './components/Cabecalho';
import ListPrograms from './components/ListPrograms';
import Score from './components/Score';

function App() {
  
  return (
    <div id="app">
      <header>
        <Cabecalho />
      </header>

      <main>
        <ListPrograms />
      </main>

      <aside>
        <Score />
      </aside>
    </div>
  );
}

export default App;
