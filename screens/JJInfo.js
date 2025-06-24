import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function JJInfo() {
  return (
    <ImageBackground
      source={require("../assets/angerbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Jumping Jacks</Text>

        <Text style={styles.listItem}>
          1. Stand upright with feet together, arms at your sides.
        </Text>
        <Text style={styles.listItem}>
          2. Jump while spreading your legs shoulder-width apart and raising
          arms overhead.
        </Text>
        <Text style={styles.listItem}>
          3. Jump back to the starting position.
        </Text>
        <Text style={styles.listItem}>
          4. Keep a steady rhythm, landing softly on your feet.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>
          - Slapping feet down hard (no soft landing)
        </Text>
        <Text style={styles.listItem}>
          - Bending arms or not raising them fully
        </Text>
        <Text style={styles.listItem}>
          - Feet not fully coming together or spreading wide enough
        </Text>
        <Text style={styles.listItem}>
          - Not keeping core tight (can lead to poor posture)
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
    color: "#fff",
    marginBottom: 8,
  },
});
