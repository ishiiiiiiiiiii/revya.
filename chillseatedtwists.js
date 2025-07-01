import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function chillseatedtwists() {
  return (
    <ImageBackground
      source={require("../assets/chillbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Seated Twist</Text>

        <Text style={styles.listItem}>
          1. Sit with legs extended.
        </Text>
        <Text style={styles.listItem}>
          2. Bend right knee, cross over left thigh.
        </Text>
        <Text style={styles.listItem}>
          3. Inhale, lengthen spine.
        </Text>
        <Text style={styles.listItem}>
          4. Exhale, twist to right, placing right hand behind you.Switch sides.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Slouching</Text>
        <Text style={styles.listItem}>- Not twisting the torso</Text>
        
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