const initialState = {
  name: "",
  level: "", //beginner, intermediate, advanced
  workoutDays: [],
  myWorkouts: [],
  lastWorkout: "", // id do ultimo treino
  dailyProgress: ["2020-06-11", "2020-06-12"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload.name };
      break;
  }
  return state;
};