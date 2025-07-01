import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignupScreen1 from "./screens/SignupScreen1";
import SignupScreen2 from "./screens/SignupScreen2";
import HomeScreen from "./screens/HomeScreen";
import ChooseWorkout from "./screens/ChooseWorkout";
import LoginInfoScreen from "./screens/LoginInfoScreen";
import ChooseMood from "./screens/ChooseMood";
import Anger from "./screens/Anger";
import AngerJS from "./screens/AngerJS";
import JumpSquatInfo from "./screens/JumpSquatInfo"; 
import Energy from './screens/Energy';
import EnergyBwSquats from "./screens/EnergyBwSquats";
import BwSquatInfo from "./screens/BwSquatInfo";
import EnergyCrunches from "./screens/EnergyCrunches";
import CrunchesInfo from "./screens/CrunchesInfo";
import EnergyPlanks from "./screens/EnergyPlanks";
import PlanksInfo from "./screens/PlanksInfo";
import DoubtWallsit from "./screens/DoubtWallsit";
import WallsitInfo from "./screens/WallsitInfo";
import DoubtPlankhold from "./screens/DoubtPlankhold";
import PlankholdInfo from "./screens/PlankholdInfo";
import DoubtSlowsquats from "./screens/DoubtSlowsquats";
import SlowsquatsInfo from "./screens/SlowsquatsInfo";
import DoubtPushup from "./screens/DoubtPushup";
import PushupInfo from "./screens/PushupInfo";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup1" component={SignupScreen1} />
        <Stack.Screen name="Signup2" component={SignupScreen2} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChooseWorkout" component={ChooseWorkout} />
        <Stack.Screen name="LoginInfo" component={LoginInfoScreen} />
        <Stack.Screen name="ChooseMood" component={ChooseMood} />
        <Stack.Screen name="Anger" component={Anger} />
        <Stack.Screen name="AngerJS" component={AngerJS} />
        <Stack.Screen name="JumpSquatInfo" component={JumpSquatInfo} />
        <Stack.Screen name="Energy" component={Energy} />
        <Stack.Screen name="EnergyBwSquats" component={EnergyBwSquats} />
        <Stack.Screen name="BwSquatInfo" component={BwSquatInfo} />
        <Stack.Screen name="EnergyCrunches" component={EnergyCrunches} />
        <Stack.Screen name="CrunchesInfo" component={CrunchesInfo} />
        <Stack.Screen name="EnergyPlanks" component={EnergyPlanks} />
        <Stack.Screen name="PlanksInfo" component={PlanksInfo} />
        <Stack.Screen name="DoubtWallsit" component={DoubtWallsit} />
        <Stack.Screen name="WallsitInfo" component={WallsitInfo} />
        <Stack.Screen name="DoubtPlankhold" component={DoubtPlankhold} />
        <Stack.Screen name="PlankholdInfo" component={PlankholdInfo} />
        <Stack.Screen name="DoubtSlowsquats" component={DoubtSlowsquats} />
        <Stack.Screen name="SlowsquatsInfo" component={SlowsquatsInfo} />
        <Stack.Screen name="DoubtPushup" component={DoubtPushup} />
        <Stack.Screen name="PushupInfo" component={PushupInfo} />
        

        


      </Stack.Navigator>
    </NavigationContainer>
  );
}



