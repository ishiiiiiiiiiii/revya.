import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function RegularWorkout({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bghomepg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Regular Workout Exercises</Text>

        <Text style={styles.exercise}>
          1. March or Jog in Place —{" "}
          <Text style={styles.subheading}>“Warm-Up Engine”{"\n"}</Text>
          <Text style={styles.why}>Why: </Text>
          <Text style={styles.context}>
            Easy, safe way to get blood flowing and heart rate up.
          </Text>
        </Text>

        <Text style={styles.exercise}>
          2. Bodyweight Squats —{" "}
          <Text style={styles.subheading}>“Leg Power”{"\n"}</Text>
          <Text style={styles.why}>Why: </Text>
          <Text style={styles.context}>
            Builds strength in quads, glutes, and core stability.
          </Text>
        </Text>

        <Text style={styles.exercise}>
          3. Incline Push-Ups or Regular Push-Ups —{" "}
          <Text style={styles.subheading}>“Upper Body Starter”{"\n"}</Text>
          <Text style={styles.why}>Why: </Text>
          <Text style={styles.context}>
            Push-ups train chest, shoulders, triceps, and core.
          </Text>
        </Text>

        <Text style={styles.exercise}>
          4. Glute Bridges —{" "}
          <Text style={styles.subheading}>“Posterior Chain Boost”{"\n"}</Text>
          <Text style={styles.why}>Why: </Text>
          <Text style={styles.context}>
            Activates glutes and lower back, great for desk workers.
          </Text>
        </Text>

        <Text style={styles.exercise}>
          5. Plank Shoulder Taps —{" "}
          <Text style={styles.subheading}>
            “Core & Stability Wake-Up”{"\n"}
          </Text>
          <Text style={styles.why}>Why: </Text>
          <Text style={styles.context}>
            Builds core strength + balance, shoulders get extra work.
          </Text>
        </Text>

        <Text style={styles.exercise}>
          6. Alternating Reverse Lunges —{" "}
          <Text style={styles.subheading}>“Single-Leg Strength”{"\n"}</Text>
          <Text style={styles.why}>Why: </Text>
          <Text style={styles.context}>
            Works legs and balance, elevates heart rate gently.
          </Text>
        </Text>

        <Text style={styles.exercise}>
          7. Burpees —{" "}
          <Text style={styles.subheading}>“Finisher for Max Energy”{"\n"}</Text>
          <Text style={styles.why}>Why: </Text>
          <Text style={styles.context}>
            The classic — full-body cardio + strength.
          </Text>
        </Text>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate("ChooseWorkout")}
        >
          <Text style={styles.startText}>START</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 25,
    marginTop: 60, // Shifted the heading lower
  },
  exercise: {
    fontSize: 16,
    color: "darkgreen",
    marginBottom: 20,
    lineHeight: 22,
  },
  subheading: {
    color: "darkgreen",
    fontWeight: "bold",
  },
  why: {
    fontWeight: "bold",
    color: "darkgreen",
  },
  context: {
    color: "darkblue",
  },
  startButton: {
    marginTop: 20,
    backgroundColor: "#FF4500",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: "center",
  },
  startText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
