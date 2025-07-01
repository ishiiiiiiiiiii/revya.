import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function TDInfo() {
  return (
    <ImageBackground
      source={require("../assets/happybg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to do Triceps Dips</Text>

        <Text style={styles.listItem}>
          1. Position your hands shoulder-width apart on a stable surface like a
          bench or sturdy chair.
        </Text>
        <Text style={styles.listItem}>
          2. Extend your legs forward with heels on the ground and arms
          straight, keeping a slight bend in the elbows.
        </Text>
        <Text style={styles.listItem}>
          3. Lower your body by bending your elbows to about 90 degrees. Keep
          your back close to the bench.
        </Text>
        <Text style={styles.listItem}>
          4. Push back up by straightening your arms to return to the starting
          position.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>
          - Letting elbows flare out to the sides.
        </Text>
        <Text style={styles.listItem}>
          - Dropping too low, which strains the shoulders.
        </Text>
        <Text style={styles.listItem}>
          - Using momentum instead of controlled motion.
        </Text>
        <Text style={styles.listItem}>
          - Placing hands too far back or wide.
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
