import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";
import { connect } from "react-redux";
import { Text } from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  padding: 30px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
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
const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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

  const toggleDay = day => {
    let newWorkoutdays = [...props.workoutDays];
    if (!props.workoutDays.includes(day)) {
      //inserir
      newWorkoutdays.push(day);
    } else {
      newWorkoutdays = newWorkoutdays.filter(i => i != day);
    }
    props.setWorkoutDays(newWorkoutdays);

    //enviar os novos dias para parametro e eu consegir pegar no header, por ex
    props.navigation.setParams({ workoutDays: newWorkoutdays });
  };

  let firstName = props.name.split(" ")[0];
  return (
    <Container>
      <HeaderText>Eae, {firstName} , tudo certo?</HeaderText>
      <HeaderText>Quais dias da semana você deseja treinar?</HeaderText>
      <DaysArea>
        <DefaultButton
          style={{ marginBottom: 16 }}
          onPress={() => toggleDay(1)}
          background={props.workoutDays.includes(1) ? "#0eba7c" : false}
        >
          <Text style={{ color: "#fff" }}>Segunda</Text>
        </DefaultButton>
        <DefaultButton
          style={{ marginBottom: 16 }}
          onPress={() => toggleDay(2)}
          background={props.workoutDays.includes(2) ? "#0eba7c" : false}
        >
          <Text style={{ color: "#fff" }}>Terça</Text>
        </DefaultButton>
        <DefaultButton
          style={{ marginBottom: 16 }}
          onPress={() => toggleDay(3)}
          background={props.workoutDays.includes(3) ? "#0eba7c" : false}
        >
          <Text style={{ color: "#fff" }}>Quarta</Text>
        </DefaultButton>
        <DefaultButton
          style={{ marginBottom: 16 }}
          onPress={() => toggleDay(4)}
          background={props.workoutDays.includes(4) ? "#0eba7c" : false}
        >
          <Text style={{ color: "#fff" }}>Quinta</Text>
        </DefaultButton>
        <DefaultButton
          style={{ marginBottom: 16 }}
          onPress={() => toggleDay(5)}
          background={props.workoutDays.includes(5) ? "#0eba7c" : false}
        >
          <Text style={{ color: "#fff" }}>Sexta</Text>
        </DefaultButton>
        <DefaultButton
          style={{ marginBottom: 16 }}
          onPress={() => toggleDay(6)}
          background={props.workoutDays.includes(6) ? "#0eba7c" : false}
        >
          <Text style={{ color: "#fff" }}>Sabado</Text>
        </DefaultButton>
        <DefaultButton
          style={{ marginBottom: 16 }}
          onPress={() => toggleDay(0)}
          background={props.workoutDays.includes(0) ? "#0eba7c" : false}
        >
          <Text style={{ color: "#fff" }}>Domingo</Text>
        </DefaultButton>
      </DaysArea>
    </Container>
  );
};

Page.navigationOptions = ({ navigation }) => {
  const nextAction = () => {
    if (
      !navigation.state.params ||
      !navigation.state.params.workoutDays.length
    ) {
      alert("Você precisa treinar pelo menos 1 dia meu fi");
    }
    navigation.navigate("StarterNiveis");
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
    workoutDays: state.useReducer.workoutDays
  };
};

//alterar nome
const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({ type: "SET_NAME", payload: { name } }),
    setWorkoutDays: workoutDays =>
      dispatch({ type: "SET_WORKOUTDAYS", payload: { workoutDays } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
