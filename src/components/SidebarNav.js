import React from 'react';
import styles from './SidebarNav.module.css';

const SidebarNav = ({ categorias, diretrizes, onDiretrizSelect }) => {
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
    <nav className={styles.sidebar} role="navigation" aria-label="Navegação principal">
      <div className={styles.sidebarContent}>
        {categorias.map(categoria => (
          <div key={categoria.id} className={styles.categoriaSection}>
            <h2 className={styles.categoriaTitle}>{categoria.nome}</h2>
            <ul className={styles.diretrizList}>
              {diretrizesNumeradas[categoria.id]?.map(diretriz => (
                <li key={diretriz.id}>
                  <button
                    className={styles.diretrizLink}
                    onClick={() => onDiretrizSelect(diretriz)}
                    aria-controls={`diretriz-${diretriz.id}`}
                  >
                    {diretriz.numeroSequencial}. {diretriz.diretriz}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SidebarNav;