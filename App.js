// App.js 
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
<<<<<<< Updated upstream
import Anger from "./screens/Anger";
import AngerJS from "./screens/AngerJS";
import JumpSquatInfo from "./screens/JumpSquatInfo";
import AngerL from "./screens/AngerL";
import LungesInfo from "./screens/LungesInfo";
import AngerPP from "./screens/AngerPP";
import PPInfo from "./screens/PPInfo";
import AngerJJ from "./screens/AngerJJ";
import JJInfo from "./screens/JJInfo";
=======

>>>>>>> Stashed changes
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup1" component={SignupScreen1} />
        <Stack.Screen name="Signup2" component={SignupScreen2} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChooseWorkout" component={ChooseWorkout} />
        <Stack.Screen name="LoginInfo" component={LoginInfoScreen} />
<<<<<<< Updated upstream
        <Stack.Screen name="ChooseMood" component={ChooseMood} />
        <Stack.Screen name="Anger" component={Anger} />
        <Stack.Screen name="AngerJS" component={AngerJS} />
        <Stack.Screen name="JumpSquatInfo" component={JumpSquatInfo} />
        <Stack.Screen name="AngerL" component={AngerL} />
        <Stack.Screen name="LungesInfo" component={LungesInfo} />
        <Stack.Screen name="AngerPP" component={AngerPP} />
        <Stack.Screen name="PPInfo" component={PPInfo} />
        <Stack.Screen name="AngerJJ" component={AngerJJ} />
        <Stack.Screen name="JJInfo" component={JJInfo} />
=======
        {/* <Stack.Screen name="ChooseMood" component={ChooseMood} /> */}
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  );
}
