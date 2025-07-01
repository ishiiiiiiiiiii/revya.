import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function CSInfo() {
  return (
    <ImageBackground
      source={require("../assets/happybg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Clap Squats</Text>

        <Text style={styles.listItem}>
          1. Stand straight with feet shoulder-width apart, arms relaxed.
        </Text>
        <Text style={styles.listItem}>
          2. Lower into a squat until your thighs are parallel to the floor.
          Keep chest up, back straight, and core tight.
        </Text>
        <Text style={styles.listItem}>
          3. Clap your hands once in front of your chest while holding the
          squat.
        </Text>
        <Text style={styles.listItem}>
          4. Stand back up to the starting position.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>
          - Not squatting low enough (thighs should be parallel to the floor).
        </Text>
        <Text style={styles.listItem}>
          - Knees moving past toes — keep them aligned.
        </Text>
        <Text style={styles.listItem}>
          - Rounding the back — keep chest up and back straight.
        </Text>
        <Text style={styles.listItem}>
          - Heels lifting off the ground — keep full foot planted.
        </Text>
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
    padding: 25,
  },
  mainHeading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
    fontFamily: "Cochin", // Example of different font
  },
  mistakeHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 10,
    fontFamily: "sans-serif-medium", // Another distinct font
  },
  listItem: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
  },
});
