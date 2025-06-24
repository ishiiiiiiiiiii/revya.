import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function ChooseWorkout({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bghomepg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Choose Your Workout</Text>

        <TouchableOpacity
          style={styles.circleButton}
          onPress={() => navigation.navigate("RegularWorkout")}
        >
          <Text style={styles.buttonText}>Regular Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.circleButton}
          onPress={() => navigation.navigate("ChooseMood")}
        >
          <Text style={styles.buttonText}>Workout based on Mood</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 50,
    textAlign: "center",
  },
  circleButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
