import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function LungesInfo() {
  return (
    <ImageBackground
      source={require("../assets/angerbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Lunges</Text>

        <Text style={styles.listItem}>
          1. Take a big step forward with one leg.
        </Text>
        <Text style={styles.listItem}>
          2. Bend both knees to 90°, back knee hovers just above the ground.
          Keep it above the ankle, not past toes.
        </Text>
        <Text style={styles.listItem}>
          3. Press through the front heel to return to starting position.
        </Text>
        <Text style={styles.listItem}>
          4. Do all reps on one leg, then switch.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Front knee going past toes</Text>
        <Text style={styles.listItem}>- Back knee touching the floor</Text>
        <Text style={styles.listItem}>- Leaning forward or arching back</Text>
        <Text style={styles.listItem}>
          - Feet too close together (lose balance)
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
