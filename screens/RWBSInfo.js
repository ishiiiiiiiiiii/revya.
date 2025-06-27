import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function RWBSInfo() {
  return (
    <ImageBackground
      source={require("../assets/happybg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Bodyweight Squats</Text>

        <Text style={styles.listItem}>
          1. Stand tall with your feet shoulder-width apart and toes slightly
          turned out.
        </Text>
        <Text style={styles.listItem}>
          2. Engage your core and keep your chest up. Push your hips back as if
          sitting into a chair.
        </Text>
        <Text style={styles.listItem}>
          3. Bend your knees and lower your body until your thighs are at least
          parallel to the ground (or as low as you can go with good form).
        </Text>
        <Text style={styles.listItem}>
          4. Keep your knees in line with your toes and your heels flat on the
          ground.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>
          - Knees caving inward (valgus collapse).
        </Text>
        <Text style={styles.listItem}>- Heels lifting off the ground.</Text>
        <Text style={styles.listItem}>
          - Bending forward excessively (leaning chest down).
        </Text>
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
