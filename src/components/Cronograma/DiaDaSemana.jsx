// DiaDaSemana.js
import React from 'react';
import Exercicio from './Exercicios';

const DiaDaSemana = ({ dia, exercicios }) => (
  <div>
    <h2>{dia}</h2>
    <ul>
      {exercicios.map((exercicio, index) => (
        <Exercicio key={index} nome={exercicio.nome} tempo={exercicio.tempo} />
      ))}
    </ul>
  </div>
);

export default DiaDaSemana;
