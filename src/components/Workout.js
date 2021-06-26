import React, { useState } from "react";
import styled from "styled-components/native";
import useMuscleImage from "../components/useMuscleImage";

const Workout = styled.View`
  background: #f1f1f1;
  border: 1px solid #ccc;
  flex-direction: row;
  margin-bottom: 16px;
`;
const WorkoutInfo = styled.View`
  flex: 1;
`;
const WorkoutTitle = styled.Text`
  font-size: 18px;
  margin: 8px;
`;
const MuscleScroll = styled.ScrollView`
  margin: 16px;
`;
const MuscleGroup = styled.View`
  width: 40px;
  height: 40px;
`;
const MuscleImage = styled.Image`
  width: 25px;
  height: 25px;
`;
const WorkoutActions = styled.View`
  justify-content: center;
`;
const WorkoutButton = styled.TouchableHighlight`
  width: 25px;
  height: 25px;
  margin: 16px;
  justify-content: center;
  align-items: center;
`;
const WorkoutButtonImage = styled.Image`
  width: 25px;
  height: 25px;
`;

export default props => {
  const [included, setIncluded] = useState(false);

  //lista de treinamentos especificos
  let muscleGroup = [];
  for (let i in props.data.exercises) {
    if (!muscleGroup.includes(props.data.exercises[i].muscle)) {
      muscleGroup.push(props.data.exercises[i].muscle);
    }
  }

  const addWorkout = () => {
    setIncluded(!included);
  };

  return (
    <Workout>
      <WorkoutInfo>
        <WorkoutTitle>{props.data.name}</WorkoutTitle>
        <MuscleScroll horizontal={true}>
          {muscleGroup.map((m, index) => (
            <MuscleGroup key={index}>
              <MuscleImage source={useMuscleImage(m)} />
            </MuscleGroup>
          ))}
        </MuscleScroll>
      </WorkoutInfo>

      <WorkoutActions>
        <WorkoutButton onPress={() => addWorkout()} underlayColor="transparent">
          <WorkoutButtonImage
            source={
              included
                ? require("../assets/check-black.png")
                : require("../assets/add.png")
            }
          />
        </WorkoutButton>
      </WorkoutActions>
    </Workout>
  );
};
