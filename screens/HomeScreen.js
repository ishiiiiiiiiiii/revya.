import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bghomepg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>About Us</Text>

        <Text style={styles.aboutText}>
          Energy in. Energy out. All in sync.{"\n\n"}
          Revya is your personal wellness companion designed to keep your body
          and mind in perfect rhythm.{"\n\n"}
          💪 Choose your fitness journey with mood-based workouts or structured
          plans for beginners and advanced levels. Whether you're feeling
          relaxed or energetic — we’ve got the right session for you.{"\n\n"}
          💧 Track your water and caffeine intake with smart, simple tools — and
          stay motivated by visualizing your habits through weekly progress
          graphs.{"\n\n"}
          📊 Get instant insights into your daily fitness with a workout
          duration bar chart, showing your effort today vs. yesterday.{"\n\n"}
          With Revya, it’s all about balance. Start moving. Stay hydrated. Keep
          it in sync.
        </Text>

        <Text style={styles.featuresHeading}>Our Features:</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChooseWorkout")}
        >
          <Text style={styles.buttonText}>Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("IntakeTracker")}
        >
          <Text style={styles.buttonText}>Caffeine and Water Intake</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start", // ensures content starts at the top
    alignItems: "center",
  },
  container: {
    padding: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00008B",
    fontFamily: "serif", // Custom style for heading (fallback)
    marginBottom: 20,
  },
  aboutText: {
    fontSize: 16,
    fontFamily: "Times New Roman",
    color: "#000",
    marginBottom: 30,
    lineHeight: 24,
  },
  featuresHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00008B",
    fontFamily: "serif", // Same style as heading
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
