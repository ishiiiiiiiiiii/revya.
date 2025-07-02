import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function stresswallsquats() {
  return (
    <ImageBackground
      source={require("../assets/stressbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Wall Squats</Text>

        <Text style={styles.listItem}>
          1. Stand with your back against a wall, feet shoulder-width apart and about 2 feet in front of you.
        </Text>
        <Text style={styles.listItem}>
          2. Slide down until your thighs are parallel to the floor.
        </Text>
        <Text style={styles.listItem}>
          3. Keep your back flat against the wall and hold the position.
        </Text>
        

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Knees going past toes (increases stress on the knees). </Text>
        <Text style={styles.listItem}>- Hips too low or too high.</Text>
        <Text style={styles.listItem}>- Arching the lower back.</Text>
        
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