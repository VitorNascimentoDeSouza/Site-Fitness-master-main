import React from 'react';
import RecipeList from '../../components/Receitas/RecipeList';
import './receitas.css';

const recipes = [
  {
    title: 'Pão de Queijo Baixo Carboidrado',
    description: 'é uma ótima opção para quem busca seguir uma dieta saudável, equilibrada e sem abrir mão dos pratos típicos da nossa culinária!',
    image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/02/iStock-1298669649.jpg',
  },
  {
    title: 'Bolo de Chocolate Baixo Carboidrado de Caneca',
    description: 'Para quem curte o tradicional bolo de chocolate, mas não quer abrir mão de uma dieta low carb',
    image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/01/iStock-515781620.jpg',
  },

  {
    title: 'Brownie Fit, Zero Gluten e Lactose',
    description: 'Diferentemente do bolo fit, assim como o bolo de banana com aveia, a massa do brownie fit precisa ter uma textura um pouco cremosa.',
    image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/03/iStock-911892204.jpg',
  },
  {
    title: 'brigadeiro fit com batata-doce',
    description: 'saboroso, nutritivo e que não irá prejudicar a sua dieta?',
    image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-1041351564.jpg',
  },

  {
    title: 'biscoito fit',
    description: 'um biscoito fit pode ser uma verdadeira mão na roda para os momentos em que pintar a vontade de beliscar algo gostoso.',
    image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2023/08/biscoito-fit.jpg',
  },
  {
    title: 'Espaguete de Abobrinha com Tomate Confit e Pinoles',
    description: 'Obter a quantidade de proteínas necessárias para o bom funcionamento do organismo é um dos grandes desafios dos veganos',
    image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-1227595698.jpg',
  },
  // Adicione mais receitas conforme necessário
];

const receitas = () => {
  return (
    <div className="App">
      <h1>Receitas Fitness</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default receitas;
