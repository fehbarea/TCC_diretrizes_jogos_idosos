import React from 'react';
import DiretrizItem from './DiretrizItem';
import  styles from './ListaDiretrizes.module.css';

const ListaDiretrizes = ({ diretrizes }) => {
  // Agrupar diretrizes por tipo
  const diretrizesPorTipo = diretrizes.reduce((grupos, diretriz) => {
    const tipo = diretriz.tipo;
    if (!grupos[tipo]) {
      grupos[tipo] = [];
    }
    grupos[tipo].push(diretriz);
    return grupos;
  }, {});

  return (
    <div className={styles.listadiretrizes}>
      <h1 className={styles.tituloPrincipal}>Diretrizes de Jogos Educacionais Móveis para idosos</h1>
      <p className={styles.paragravoAbertura} >Essas dirtetrizes são o resultado do trabalho de conclusão de curso (TCC) de Felipe Alves Barea para a UTFPR e foram construídas com base na análise da literatura </p>
      {Object.entries(diretrizesPorTipo).map(([tipo, diretrizesDoTipo]) => (
        <section key={tipo} className="grupo-tipo">
          <h2 className={styles.tituloTipo}>{tipo}</h2>
          <div className={styles.diretrizesContainer}>
            {diretrizesDoTipo.map((diretriz) => (
              <DiretrizItem key={diretriz.id} diretriz={diretriz} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ListaDiretrizes;
