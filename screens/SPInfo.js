import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function SPInfo() {
  return (
    <ImageBackground
      source={require("../assets/happybg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to do Spiderman Planks</Text>

        <Text style={styles.listItem}>
          1. Start in a forearm plank position.
        </Text>
        <Text style={styles.listItem}>
          2. Bring your right knee toward your right elbow, keeping your hips
          low and body stable.
        </Text>
        <Text style={styles.listItem}>
          3. Return your right leg to the starting position.
        </Text>
        <Text style={styles.listItem}>
          4. Repeat with the left knee toward the left elbow.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Letting hips rise too high.</Text>
        <Text style={styles.listItem}>- Rushing the movement.</Text>
        <Text style={styles.listItem}>- Arching the lower back</Text>
        <Text style={styles.listItem}>- Not engaging the core.</Text>
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
