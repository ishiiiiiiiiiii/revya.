import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function stresswallLstands() {
  return (
    <ImageBackground
      source={require("../assets/stressbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Wall L Stands</Text>

        <Text style={styles.listItem}>
          1. Face away from the wall, place hands on the floor.
        </Text>
        <Text style={styles.listItem}>
          2. Walk feet up the wall and adjust hands until hips are over shoulders, legs straight out.
        </Text>
        <Text style={styles.listItem}>
          3. Form a clean 90° angle and hold.
        </Text>
        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Overarching the back.</Text>
        <Text style={styles.listItem}>- Hands too far from the wall.</Text>
        <Text style={styles.listItem}>- Not warming up shoulders/wrists.</Text>
        
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