import React from 'react';
import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.content}>
        <h2>Sobre as Diretrizes</h2>
        <p>
          Este guia apresenta um conjunto abrangente de diretrizes para o desenvolvimento 
          de jogos digitais acessíveis voltados para idosos. As diretrizes são organizadas 
          em quatro categorias principais:
        </p>
        
        <div className={styles.categoriasList}>
          <div className={styles.categoriaItem}>
            <h3>1. Aspectos Motores</h3>
            <p>Diretrizes focadas na interação física e controles do jogo, considerando as 
            limitações motoras comuns em idosos.</p>
          </div>
          
          <div className={styles.categoriaItem}>
            <h3>2. Aspectos Cognitivos</h3>
            <p>Recomendações para adaptar o processamento de informações e reduzir a carga 
            cognitiva durante o jogo.</p>
          </div>
          
          <div className={styles.categoriaItem}>
            <h3>3. Aspectos Visuais</h3>
            <p>Orientações sobre interface, design visual e apresentação de informações 
            para melhor visibilidade e compreensão.</p>
          </div>
          
          <div className={styles.categoriaItem}>
            <h3>4. Aspectos de Aprendizagem</h3>
            <p>Diretrizes para tornar o processo de aprendizado e adaptação ao jogo mais 
            efetivo e agradável para idosos.</p>
          </div>
        </div>

        <p className={styles.note}>
          Cada diretriz inclui exemplos práticos, possíveis exceções, comentários explicativos 
          e referências bibliográficas para aprofundamento.
        </p>
        <section className={styles.paragrafoAbertura}>
        <h3>Introdução</h3>
        <p>Estamos vivendo mais e melhor, e com o aumento da expectativa de vida, a busca por um envelhecimento ativo e com aprendizado contínuo ao longo de toda a vida se torna essencial. Nesse cenário, os jogos sérios educacionais surgem como uma ferramenta poderosa, unindo entretenimento e conhecimento para estimular aspectos cognitivos e promover a inclusão social.</p>
        <p>No entanto, a população idosa frequentemente encontra barreiras de acessibilidade que a impede de usufruir plenamente dos benefícios dessas tecnologias. Foi para ajudar a derrubar essas barreiras que as diretrizes GARSE (Game Accessibility Recommendation for Senior Education) foram desenvolvidas.</p>
        <p>Essas diretrizes são o resultado do trabalho de conclusão de curso (TCC) de Felipe Alves Barea para a UTFPR e foram construídas com base na análise da literatura.</p>
      </section>

      <section className={styles.comoUtilizar}>
        <h3>Como utilizar</h3>
        <p>As diretrizes propostas buscam complementar o conjunto <a href="https://gameaccessibilityguidelines.com/" target="_blank" rel="noopener noreferrer">Game Accessibility Guidelines (GAG)</a>. O objetivo é preencher lacunas específicas, oferecendo recomendações voltadas para a educação de adultos, as preferências de pessoas idosas e o contexto de jogos sérios, temas não abordados pelo GAG. Dessa forma, as novas diretrizes não substituem o conjunto original, mas devem ser aplicadas em conjunto com suas recomendações para garantir um design mais completo.</p>
        <p>Para facilitar a consulta e aplicação, organizamos as recomendações em categorias que abordam as principais necessidades e limitações identificadas na pesquisa: Motor, Cognitivo, Visão e uma categoria especial de Aprendizagem, criada justamente por conta do foco educacional deste trabalho.</p>
        <p>Navegue pelas seções, explore os exemplos e utilize este material como um aliado no processo de design e desenvolvimento.</p>
        <p>Nosso desejo é que as diretrizes GARSE inspirem a criação de aplicações mais inclusivas, fomentando o envelhecimento ativo e a qualidade de vida por meio de ferramentas educacionais que respeitem e valorizem a terceira idade.</p>
      </section>

      </div>
    </section>
  );
};

export default Introduction;