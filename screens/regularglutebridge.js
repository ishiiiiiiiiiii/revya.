import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function regularglutebridge() {
  return (
    <ImageBackground
      source={require("../assets/happybg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Glute Bridges</Text>

        <Text style={styles.listItem}>
          1. Lie on your back with knees bent, feet flat on the floor hip-width apart.
        </Text>
        <Text style={styles.listItem}>
          2. Keep arms at your sides, palms down.
        </Text>
        <Text style={styles.listItem}>
          3. Engage your core and squeeze your glutes.
        </Text>
        <Text style={styles.listItem}>
          4. Press through your heels to lift your hips until your body forms a straight line from shoulders to knees.
        </Text>
        <Text style={styles.listItem}>
          5. Hold at the top for a second, then slowly lower back down.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>
          - Knees caving inward (valgus collapse).
        </Text>
        <Text style={styles.listItem}>- Pushing through the toes.</Text>
        
        <Text style={styles.listItem}>- Rounding the back.</Text>
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