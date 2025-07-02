import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function PPInfo() {
  return (
    <ImageBackground
      source={require("../assets/angerbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Push-ups</Text>

        <Text style={styles.listItem}>
          1. Hands shoulder-width apart, body in a straight line (plank
          position).
        </Text>
        <Text style={styles.listItem}>
          2. Bend elbows, lowering chest toward the floor. Keep them at about
          45° from your body.
        </Text>
        <Text style={styles.listItem}>
          3. Press through your palms to return to the starting position.
        </Text>
        <Text style={styles.listItem}>
          4. Keep abs and glutes engaged throughout.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Sagging hips or arching back</Text>
        <Text style={styles.listItem}>- Flaring elbows out too wide</Text>
        <Text style={styles.listItem}>- Only lowering halfway</Text>
        <Text style={styles.listItem}>
          - Head dropping down (not aligned with spine). Not keeping a straight
          body line
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