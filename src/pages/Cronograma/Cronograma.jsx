// App.js
import React from 'react';
import DiaDaSemana from '../../components/Cronograma/DiaDaSemana';
import './cronograma.css'

const cronogramaExercicios = {
  segunda: [
    { nome: 'Pernas', tempo: '30 minutos' },
    { nome: 'Gluteos', tempo: '3 séries de 15' },
  ],
  terca: [
    { nome: 'Remada com halteres', tempo: '30 minutos' },
    { nome: 'Elevação frontal', tempo: '3 séries de 15' },
  ],
  quarta: [
    { nome: 'Polichinelos', tempo: '30 minutos' },
    { nome: 'Prancha', tempo: '3 séries de 15' },
  ],
  quinta: [
    { nome: 'Pernas', tempo: '30 minutos' },
    { nome: 'Gluteos', tempo: '3 séries de 15' },
  ],
  sexta: [
    { nome: 'Remada com halteres', tempo: '30 minutos' },
    { nome: 'Elevação frontal', tempo: '3 séries de 15' },
  ],
  sabado: [
    { nome: 'Polichinelos', tempo: '30 minutos' },
    { nome: 'Prancha', tempo: '3 séries de 15' },
  ]
};

const cronograma = () => {
  return (
    
    <div>
      <h1>Cronograma de Exercícios para Emagrecer</h1>
      {Object.keys(cronogramaExercicios).map((dia) => (
        <DiaDaSemana key={dia} dia={dia} exercicios={cronogramaExercicios[dia]} />
      ))}
    </div>
  );
};

export default cronograma;
