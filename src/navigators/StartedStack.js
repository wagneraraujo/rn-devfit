import { createStackNavigator } from "react-navigation-stack";

import StarterIntro from "../screens/StarterIntro";
import StarterName from "../screens/StarterName";
import StarterDays from "../screens/StarterDays";
import StarterNiveis from "../screens/StarterNiveis";
import StarterRecommendations from "../screens/StarterRecommendations";
export default createStackNavigator({
  StarterIntro,
  StarterName,
  StarterDays,
  StarterNiveis,
  StarterRecommendations
});
