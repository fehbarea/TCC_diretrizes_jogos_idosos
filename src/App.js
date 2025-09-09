import React from 'react';
import ListaDiretrizes from './components/ListaDiretrizes';
import diretrizesData from './data/diretrizes.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <ListaDiretrizes diretrizes={diretrizesData.diretrizes} />
    </div>
  );
}

export default App;
