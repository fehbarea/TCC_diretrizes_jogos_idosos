import React from 'react';
import DiretrizItem from './DiretrizItem';
import  styles from './ListaDiretrizes.module.css';

const ListaDiretrizes = ({ diretrizes }) => {
  // Agrupar diretrizes por categoria e criar numeração sequencial
  const diretrizesPorCategoria = diretrizes.reduce((grupos, diretriz) => {
    const categoriaId = diretriz.categoriaId;
    if (!grupos[categoriaId]) {
      grupos[categoriaId] = [];
    }
    grupos[categoriaId].push(diretriz);
    return grupos;
  }, {});

  // Adicionar numeração sequencial por categoria
  const diretrizesNumeradas = Object.keys(diretrizesPorCategoria).reduce((resultado, categoriaId) => {
    const diretrizesDaCategoria = diretrizesPorCategoria[categoriaId].sort((a, b) => a.id - b.id);
    resultado[categoriaId] = diretrizesDaCategoria.map((diretriz, index) => ({
      ...diretriz,
      numeroSequencial: `${categoriaId}.${index + 1}`
    }));
    return resultado;
  }, {});

  return (
    <div className={styles.listadiretrizes}>


      {Object.entries(diretrizesNumeradas).map(([categoriaId, diretrizesDaCategoria]) => {
        const categoria = diretrizesDaCategoria[0];
        const nomeCategoria = categoria?.tipo || 'Categoria';
        
        return (
          <section key={categoriaId} className="grupo-tipo">
            <h2 className={styles.tituloTipo}>{nomeCategoria}</h2>
            <div className={styles.diretrizesContainer}>
              {diretrizesDaCategoria.map((diretriz) => (
                <DiretrizItem key={diretriz.id} diretriz={diretriz} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ListaDiretrizes;
