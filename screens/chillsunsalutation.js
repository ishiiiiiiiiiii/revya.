import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function chillsunsalutation() {
  return (
    <ImageBackground
      source={require("../assets/chillbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Sun Salutations</Text>

        <Text style={styles.listItem}>
          1. Start in Mountain Pose (Tadasana).
          
        </Text>
        <Text style={styles.listItem}>
          2. Inhale, raise arms overhead.Exhale, fold forward.
        </Text>
        <Text style={styles.listItem}>
          3. Inhale, lift halfway.Exhale, step or jump to plank, then lower to Chaturanga.
        </Text>
        <Text style={styles.listItem}>
          4. Inhale, Upward-Facing Dog.Exhale, Downward-Facing Dog.
        </Text>
        <Text style={styles.listItem}>
          4. Inhale, step forward.
        </Text>
        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Holding your breath (instead of syncing with movement).</Text>
        <Text style={styles.listItem}>- Arching the lower back in Upward Dog (strain risk).</Text>
        <Text style={styles.listItem}>- Rushing through without proper form.</Text>
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