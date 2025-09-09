import React, { useState } from 'react';
import styles from './DiretrizItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
const DiretrizItem = ({ diretriz }) => {
  const [expandida, setExpandida] = useState(false);

  const toggleExpansao = () => {
    setExpandida(!expandida);
  };

  return (
    <div className={styles.diretrizItem} role="region" aria-labelledby={`diretriz-${diretriz.id}`}>
      <button
        className={styles.diretrizHeader}
        onClick={toggleExpansao}
        aria-expanded={expandida}
        aria-controls={`diretriz-content-${diretriz.id}`}
        id={`diretriz-${diretriz.id}`}
      >
        <span className={styles.diretrizTexto}>{diretriz.diretriz}</span>
        <span 
          className={`seta ${expandida ? 'expandida' : ''}`}
          aria-hidden="true"
        >
        <FontAwesomeIcon icon={ !expandida ? faAngleDown : faAngleUp} />

        </span>
      </button>
      
      {expandida && (
        <div 
          className={styles.diretrizConteudo}
          id={`diretriz-content-${diretriz.id}`}
          role="region"
          aria-labelledby={`diretriz-${diretriz.id}`}
        >
          <div className={styles.diretrizCampo}>
            <h4>Exemplo:</h4>
            <p>{diretriz.exemplo}</p>
          </div>
          
          <div className={styles.diretrizCampo}>
            <h4>Exceção:</h4>
            <p>{diretriz.excecao}</p>
          </div>
          
          <div className={styles.diretrizCampo}>
            <h4>Comentário:</h4>
            <p>{diretriz.comentario}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiretrizItem;
