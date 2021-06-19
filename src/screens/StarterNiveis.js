import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";
import { connect } from "react-redux";
import { Text } from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 30px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;
`;

const SubHeader = styled.Text`
  font-size: 16px;
  color: #191919;
  margin-bottom: 16px;
`;
const NameInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
  padding: 10px;
`;

const NextButton = styled.Button``;
const DaysArea = styled.View`
  width: 100%;
`;

const Page = props => {
  const handleChangeName = t => {
    props.setName(t);
    props.navigation.setParams({ name: t });
  };

  const setMyLevel = level => {
    props.setLevel(level);
    props.navigation.setParams({ level: level });
  };

  let funnyPhrase = "";

  //quantidade de dias selecionado pelo usuario
  switch (props.workoutDays.length) {
    case 1:
      funnyPhrase = "Só um dia? Você é um preguiçoso! Arrombado!";
      break;

    case 2:
      funnyPhrase = "Se anima ai, só 2 dias mesmo? Melhor que nada...";
      break;

    case 3:
      funnyPhrase = "Isso ai, rumo a evolução. ";
      break;

    case 4:
      funnyPhrase = "Quer ficar grande mesmo, hein! Boto fé!";
      break;

    case 5:
      funnyPhrase = "Que lindo! Vai ficar monstrão mesmo! ";
      break;

    case 6:
      funnyPhrase = "Carai! Tu é pika mesmo!";
      break;

    case 7:
      funnyPhrase = "Eita desgraça!! Vai ficar demoniaco!! Monstroooooo!!!";
  }

  return (
    <Container>
      <HeaderText>{funnyPhrase}</HeaderText>
      <SubHeader>Qual o seu nível hoje?</SubHeader>

      <DaysArea>
        <DefaultButton
          background={props.level == "beginner" ? "#ff7f41" : false}
          onPress={() => setMyLevel("beginner")}
        >
          <Text style={{ color: "#fff" }}>A porra de um frango!</Text>
        </DefaultButton>
        <DefaultButton
          background={props.level == "intermediate" ? "#00a7a3" : false}
          onPress={() => setMyLevel("intermediate")}
        >
          <Text style={{ color: "#fff" }}>Shape de Praia</Text>
        </DefaultButton>
        <DefaultButton
          background={props.level == "advanced" ? "#e52c29" : false}
          onPress={() => setMyLevel("advanced")}
        >
          <Text style={{ color: "#fff" }}>Monstro estilo Balestrini</Text>
        </DefaultButton>
      </DaysArea>
    </Container>
  );
};

Page.navigationOptions = ({ navigation }) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.level) {
      alert("você precisa escolher um nível ");
    }
    navigation.navigate("StarterRecommendations");
  };
  return {
    title: "",
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10
    }
  };
};

const mapStateToProps = state => {
  return {
    name: state.useReducer.name,
    level: state.useReducer.level,
    workoutDays: state.useReducer.workoutDays
  };
};

//alterar nome
const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({ type: "SET_NAME", payload: { name } }),
    setLevel: level => dispatch({ type: "SET_LEVEL", payload: { level } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
