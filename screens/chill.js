import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function chill({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/chillbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.moodText}>Mood Chosen: Chill</Text>
        <Text style={styles.exerciseHeading}>Exercise:</Text>

        <View style={styles.exerciseList}>
          <Text style={styles.exerciseText}>1) Chair Poses</Text>
          <Text style={styles.exerciseText}>2) Happy Baby</Text>
          <Text style={styles.exerciseText}>3) Seated Twist</Text>
          <Text style={styles.exerciseText}>4) Spinal Twist</Text>
          <Text style={styles.exerciseText}>3) Standing Meditation</Text>
          <Text style={styles.exerciseText}>4) Sun Salutation</Text>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate("initchairposes")} // Change target screen if needed
        >
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  moodText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  exerciseHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  exerciseList: {
    marginBottom: 40,
  },
  exerciseText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
  },
  startButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});