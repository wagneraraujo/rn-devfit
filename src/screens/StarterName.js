import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";
import { connect } from "react-redux";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  padding: 30px;
`;

const HeaderText = styled.Text`
  font-size: 26px;
  text-align: center;
  margin-bottom: 16px;
`;

const NameInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
  padding: 10px;
`;

const NextButton = styled.Button``;

const Page = props => {
  const nextAction = () => {
    if (!props.name) {
      alert("Você prcisa de um nome");
      return;
    }
    props.navigation.navigate("StarterDays");
  };

  const handleChangeName = t => {
    props.setName(t);
    props.navigation.setParams({ name: t });
  };
  return (
    <Container>
      <HeaderText>Qual o seu nome?</HeaderText>
      <NameInput
        value={props.name}
        onChangeText={handleChangeName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={nextAction}
      />
    </Container>
  );
};

Page.navigationOptions = ({ navigation }) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.name) {
      alert("Preencha com seu nome");
    }
    navigation.navigate("StarterDays");
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
    name: state.useReducer.name
  };
};

//alterar nome
const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({ type: "SET_NAME", payload: { name } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
