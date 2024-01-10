import React from 'react';
import styled from 'styled-components';
import gymImage from '/images/fitness1.png'; 

const WelcomeContainer = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 100px 20px;
`;

const WelcomeTitle = styled.h1`
  color: #000; 
  font-size: 2rem;
  margin-bottom: 20px;
`;

const WelcomeMessage = styled.p`
  color: #555;
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const KnowPlansButton = styled.button`
  background-color: #f36f21; 
  color: #fff; 
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FitnessInfoContainer = styled.div`
  background-color: #000; /* Fundo preto */
  color: #ecf0f1;
  padding: 40px 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const GymImage = styled.img`
  width: 100%; 
  height: 100%;
  max-width: 400px; 
  object-fit: cover; 
  border-radius: 8px;
  margin-bottom: 20px;
  transition: transform 0.3s; 

  &:hover {
    transform: scale(1.1);
  }
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #ecf0f1; 
  max-width: 600px; 
`;

const FinancialPlansContainer = styled.div`
  background-color: #fff; /* Fundo branco */
  padding: 50px 20px;
  text-align: center;
`;

const PlansTitle = styled.h2`
  color: #ffa500; /* Laranja */
`;

const PlansGrid = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20px;
`;

const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffa500; /* Laranja */
  color: #fff; /* Texto branco */
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const PlanTitle = styled.h3`
  margin-bottom: 10px;
`;

const PlanPrice = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const PlanDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px; /* Reduzi a margem para dar mais destaque ao botão */
`;

const ChooseButton = styled.button`
  background-color: #000; /* Preto */
  color: #fff; /* Texto branco */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Home = () => {
    return(
        <div>
        <WelcomeContainer>
      <WelcomeTitle>Bem-vindo ao Nosso Website</WelcomeTitle>
      <WelcomeMessage>
        Descubra os benefícios de um estilo de vida saudável e ativo. Junte-se a nós na jornada para uma vida mais fitness e equilibrada.
      </WelcomeMessage>
      <KnowPlansButton href="#financial-plans">Conhecer Planos</KnowPlansButton>
    </WelcomeContainer>

<FitnessInfoContainer>
<div>
  <h2>Conheça o nosso projeto</h2>
  <InfoText>
  Bem-vindo ao nosso espaço dedicado à promoção de um estilo de vida ativo e saudável.
  Aqui, oferecemos recursos valiosos para ajudar você a atingir seus objetivos de fitness e bem-estar.
  </InfoText>
  
  <InfoText>
  Explore nossos planos personalizados, descubra dicas de treino, e mergulhe em uma jornada para alcançar o equilíbrio entre corpo e mente.
  Este é o seu convite para começar uma jornada de transformação. Junte-se a nós e descubra o poder de uma vida mais fitness!
  </InfoText>
</div>

<GymImage src={gymImage} alt="Imagem da Academia" />
</FitnessInfoContainer>

<FinancialPlansContainer name="financial-plans">
      <PlansTitle>Escolha o Seu Plano Financeiro</PlansTitle>

      <PlansGrid>
        <PlanCard onClick={() => handleChoosePlan(1)}>
          <PlanTitle>Plano Básico</PlanTitle>
          <PlanPrice>R$99,99/mês</PlanPrice>
          <PlanDescription>Plano Básico com recursos incríveis.</PlanDescription>
          <ChooseButton>Escolher</ChooseButton>
        </PlanCard>

        <PlanCard onClick={() => handleChoosePlan(2)}>
          <PlanTitle>Plano Premium</PlanTitle>
          <PlanPrice>R$149,99/mês</PlanPrice>
          <PlanDescription>Plano Premium para usuários exigentes.</PlanDescription>
          <ChooseButton>Escolher</ChooseButton>
        </PlanCard>

        <PlanCard onClick={() => handleChoosePlan(3)}>
          <PlanTitle>Plano Ultimate</PlanTitle>
          <PlanPrice>R$199,99/mês</PlanPrice>
          <PlanDescription>Plano Ultimate para a experiência completa.</PlanDescription>
          <ChooseButton>Escolher</ChooseButton>
        </PlanCard>
      </PlansGrid>
    </FinancialPlansContainer>
    </div>
    )
}

export default Home