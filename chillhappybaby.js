import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function chillhappybaby() {
  return (
    <ImageBackground
      source={require("../assets/chillbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Happy Baby</Text>

        <Text style={styles.listItem}>
          1. Lie on your back, bend knees toward chest.
        </Text>
        <Text style={styles.listItem}>
          2. Grab outer edges of feet with hands.
        </Text>
        <Text style={styles.listItem}>
          3. Open knees wider than torso, soles of feet face up.
        </Text>
        <Text style={styles.listItem}>
          4. Gently rock side to side if comfortable.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Grabbing the toes instead of outer feet (less stability).</Text>
        <Text style={styles.listItem}>- Forcing knees to the ground (avoid hip strain).</Text>
        
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