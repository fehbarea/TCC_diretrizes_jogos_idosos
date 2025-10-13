import React, { useState } from 'react';
import ListaDiretrizes from './components/ListaDiretrizes';
import SidebarNav from './components/SidebarNav';
import Introduction from './components/Introduction';
import diretrizesData from './data/diretrizes.json';
import './App.css';

function App() {
  const [selectedDiretriz, setSelectedDiretriz] = useState(null);

  const handleDiretrizSelect = (diretriz) => {
    setSelectedDiretriz(diretriz);
    // Scroll to the selected diretriz
    const element = document.getElementById(`diretriz-${diretriz.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <SidebarNav 
        categorias={diretrizesData.categorias} 
        diretrizes={diretrizesData.diretrizes}
        onDiretrizSelect={handleDiretrizSelect}
      />
      <main className="mainContent">
        <header className="header">
        <h1>GARSE</h1>
          <p className="subtitle">
          Recomendação de acessibilidade de jogos para educação de idosos
          </p>
        </header>
        <div className="contentContainer">
          <Introduction />
          <ListaDiretrizes diretrizes={diretrizesData.diretrizes} />
        </div>
        <div>
          <h2>Referências</h2>
          <p>ELLIS, B. et al. Game Accessibility Guidelines: Full List. [S.l.]: , 2012. Acesso em: 7 jun.
            2025. Disponível em: https://gameaccessibilityguidelines.com/full-list/.</p>
  
        </div>
      </main>
    </div>
  );
}

export default App;
