import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function chilllyingspinaltwist() {
  return (
    <ImageBackground
      source={require("../assets/chillbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Spinal Twist</Text>

        <Text style={styles.listItem}>
          1. Lie on your back, bring knees to chest.
        </Text>
        <Text style={styles.listItem}>
          2. Drop knees to one side while keeping shoulders grounded.
        </Text>
        <Text style={styles.listItem}>
          3. Extend opposite arm and look away from knees.
        </Text>
        <Text style={styles.listItem}>
          4. Hold, then repeat on other side.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        
        <Text style={styles.listItem}>- Letting shoulders lift off the floor.</Text>
        <Text style={styles.listItem}>- Twisting too fast without a warm-up.</Text>
        
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