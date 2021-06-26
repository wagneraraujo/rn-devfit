import React, { useEffect } from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";
import { connect } from "react-redux";
import { Text } from "react-native";
import workoutJson from "../presetWorkouts.json";
import Workout from "../components/Workout";
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

const WorkoutList = styled.FlatList`
  width: 100%;
`;

const Page = props => {
  useEffect(() => {
    props.navigation.setParams({ myWorkouts: props.myWorkouts });
  }, [props.myWorkouts]); //ou sempre que myWorkouts mudar

  return (
    <Container>
      <HeaderText>Opções de treino para você.</HeaderText>
      <SubHeader>Você selecionou {props.myWorkouts.length}</SubHeader>

      <WorkoutList
        data={workoutJson}
        renderItem={({ item }) => <Workout data={item} />}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

Page.navigationOptions = ({ navigation }) => {
  let btnNext = "Ignorar";

  if (
    navigation.state.params &&
    navigation.state.params.myWorkouts.length > 0
  ) {
    btnNext = "Concluir";
  }

  const nextAction = () => {
    // if (!navigation.state.params || !navigation.state.params.level) {
    //   alert("você precisa escolher um nível ");
    // }
    // navigation.navigate("StarterRecommendations");
  };
  return {
    title: "",
    headerRight: <NextButton title={btnNext} onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10
    }
  };
};

const mapStateToProps = state => {
  return {
    myWorkouts: state.useReducer.myWorkouts
  };
};

//alterar nome
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
