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

import JumpSquatInfo from "./screens/JumpSquatInfo";
import AngerL from "./screens/AngerL";
import LungesInfo from "./screens/LungesInfo";
import AngerPP from "./screens/AngerPP";
import PPInfo from "./screens/PPInfo";
import AngerJJ from "./screens/AngerJJ";
import JJInfo from "./screens/JJInfo";
import Happy from "./screens/Happy";
import HappyCS from "./screens/HappyCS";
import CSInfo from "./screens/CSInfo";
import HappyKJ from "./screens/HappyKJ";
import KJInfo from "./screens/KJInfo";
import Happytd from "./screens/Happytd";
import TDInfo from "./screens/TDInfo";
import HappySP from "./screens/HappySP";
import SPInfo from "./screens/SPInfo";
import RegularWorkout from "./screens/RegularWorkout";
import RWJog from "./screens/RWJog";
import RWBSquat from "./screens/RWBSquat";
import RWBSInfo from "./screens/RWBSInfo";
import IntakeTracker from "./screens/IntakeTracker";
import IntakeSummary from "./screens/IntakeSummary";
import WeeklyGraph from "./screens/WeeklyGraph";

>>>>>>> 9c852a4c6eddea5aad92edc5483fa2818b92f493
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
        <Stack.Screen name="AngerL" component={AngerL} />
        <Stack.Screen name="LungesInfo" component={LungesInfo} />
        <Stack.Screen name="AngerPP" component={AngerPP} />
        <Stack.Screen name="PPInfo" component={PPInfo} />
        <Stack.Screen name="AngerJJ" component={AngerJJ} />
        <Stack.Screen name="JJInfo" component={JJInfo} />
        <Stack.Screen name="Happy" component={Happy} />
        <Stack.Screen name="HappyCS" component={HappyCS} />
        <Stack.Screen name="CSInfo" component={CSInfo} />
        <Stack.Screen name="HappyKJ" component={HappyKJ} />
        <Stack.Screen name="KJInfo" component={KJInfo} />
        <Stack.Screen name="Happytd" component={Happytd} />
        <Stack.Screen name="TDInfo" component={TDInfo} />
        <Stack.Screen name="HappySP" component={HappySP} />
        <Stack.Screen name="SPInfo" component={SPInfo} />
        <Stack.Screen name="RegularWorkout" component={RegularWorkout} />
        <Stack.Screen name="RWJog" component={RWJog} />
        <Stack.Screen name="RWBSquat" component={RWBSquat} />
        <Stack.Screen name="RWBSInfo" component={RWBSInfo} />
        <Stack.Screen name="IntakeTracker" component={IntakeTracker} />
        <Stack.Screen name="IntakeSummary" component={IntakeSummary} />
        <Stack.Screen name="WeeklyGraph" component={WeeklyGraph} />
>>>>>>> 9c852a4c6eddea5aad92edc5483fa2818b92f493
      </Stack.Navigator>
    </NavigationContainer>
  );
}



