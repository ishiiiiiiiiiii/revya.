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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
