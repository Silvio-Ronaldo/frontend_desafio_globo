import React from 'react';
import api from './services/api';

import './App.css';
import './global.css';
import './Main.css';
import './Header.css';

function App() {
  
  return (
    <div id="app">
      <header>
        <strong>GQUIZ</strong>
      </header>

      <main>
        <div id="programs">
          <ul>
            <li>ENCONTRO COM FÁTIMA BERNARDES</li>
            <li>BBB 20</li>
            <li>DOMINGÃO DO FAUSTÃO</li>
            <li>É DE CASA</li>
          </ul>
        </div>
      </main>

      <aside>
        <div id="score">

        </div>
      </aside>
    </div>
  );
}

export default App;
