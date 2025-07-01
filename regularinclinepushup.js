import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function regularinclinepushup() {
  return (
    <ImageBackground
      source={require("../assets/happybg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Incline PushUps</Text>

        <Text style={styles.listItem}>
          1. Place your hands shoulder-width apart on a stable elevated surface (like a bench).
        </Text>
        <Text style={styles.listItem}>
          2. Walk your feet back until your body is in a straight line.
        </Text>
        <Text style={styles.listItem}>
          3. Lower your chest toward the surface by bending your elbows.
        </Text>
        <Text style={styles.listItem}>
          4. Keep your core tight and back straight.
        </Text>
        <Text style={styles.listItem}>
          5. Push through your palms to return to the starting position.
        </Text>
        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>
          - Knees caving inward (valgus collapse).
        </Text>
        <Text style={styles.listItem}>- Not going low enough.</Text>
        <Text style={styles.listItem}>
          - Flaring elbows too wide.
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