<<<<<<< HEAD
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ✅ Screens — keep them grouped together
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

// ✅ Create the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        {/* ✅ Auth + Welcome Flow */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup1" component={SignupScreen1} />
        <Stack.Screen name="Signup2" component={SignupScreen2} />
        <Stack.Screen name="LoginInfo" component={LoginInfoScreen} />

        {/* ✅ Main App */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChooseWorkout" component={ChooseWorkout} />
        <Stack.Screen name="ChooseMood" component={ChooseMood} />

        {/* ✅ Anger Flow */}
        <Stack.Screen name="Anger" component={Anger} />
        <Stack.Screen name="AngerJS" component={AngerJS} />
        <Stack.Screen name="JumpSquatInfo" component={JumpSquatInfo} />
        <Stack.Screen name="AngerL" component={AngerL} />
        <Stack.Screen name="LungesInfo" component={LungesInfo} />
        <Stack.Screen name="AngerPP" component={AngerPP} />
        <Stack.Screen name="PPInfo" component={PPInfo} />
        <Stack.Screen name="AngerJJ" component={AngerJJ} />
        <Stack.Screen name="JJInfo" component={JJInfo} />

        {/* ✅ Happy Flow */}
        <Stack.Screen name="Happy" component={Happy} />
        <Stack.Screen name="HappyCS" component={HappyCS} />
        <Stack.Screen name="CSInfo" component={CSInfo} />
        <Stack.Screen name="HappyKJ" component={HappyKJ} />
        <Stack.Screen name="KJInfo" component={KJInfo} />
        <Stack.Screen name="Happytd" component={Happytd} />
        <Stack.Screen name="TDInfo" component={TDInfo} />
        <Stack.Screen name="HappySP" component={HappySP} />
        <Stack.Screen name="SPInfo" component={SPInfo} />

        {/* ✅ Regular Workout */}
        <Stack.Screen name="RegularWorkout" component={RegularWorkout} />
        <Stack.Screen name="RWJog" component={RWJog} />
        <Stack.Screen name="RWBSquat" component={RWBSquat} />
        <Stack.Screen name="RWBSInfo" component={RWBSInfo} />

        {/* ✅ Intake Tracker */}
        <Stack.Screen name="IntakeTracker" component={IntakeTracker} />
        <Stack.Screen name="IntakeSummary" component={IntakeSummary} />
        <Stack.Screen name="WeeklyGraph" component={WeeklyGraph} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
=======
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, Picker } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [useMetric, setUseMetric] = useState(true); // true: cm/kg, false: inch/lbs

  const calculateBMI = () => {
    if (!height || !weight) return '';
    let h = parseFloat(height);
    let w = parseFloat(weight);

    if (!useMetric) {
      // Convert to metric
      h = h * 2.54; // inches to cm
      w = w * 0.453592; // lbs to kg
    }

    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Age</Text>
      <TextInput style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric" />

      <Text style={styles.label}>Gender</Text>
      <TextInput style={styles.input} value={gender} onChangeText={setGender} />

      <Text style={styles.label}>
        Height ({useMetric ? 'cm' : 'in'}) & Weight ({useMetric ? 'kg' : 'lbs'})
      </Text>
      <TextInput
        placeholder="Height"
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        placeholder="Weight"
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <View style={styles.switchContainer}>
        <Text>Use Metric (cm/kg): </Text>
        <Switch value={useMetric} onValueChange={setUseMetric} />
      </View>

      <Text style={styles.label}>BMI (Auto-calculated): {calculateBMI()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    borderRadius: 5,
    marginTop: 5
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  }
});
>>>>>>> 9c42552bfdb3dda43774128269cd1dc0daca299e
