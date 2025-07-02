import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function stressdownwarddog() {
  return (
    <ImageBackground
      source={require("../assets/stressbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Downward Dog</Text>

        <Text style={styles.listItem}>
          1. Start on hands and knees.
        </Text>
        <Text style={styles.listItem}>
          2. Tuck toes and lift hips up and back, forming an inverted V.
        </Text>
        <Text style={styles.listItem}>
          3. Press hands and feet firmly into the ground, keeping spine long.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Heels lifted too high.</Text>
        <Text style={styles.listItem}>- Locked elbows.</Text>
        
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