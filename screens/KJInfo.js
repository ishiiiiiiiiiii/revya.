import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function KJInfo() {
  return (
    <ImageBackground
      source={require("../assets/happybg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Knee raise Jogs</Text>

        <Text style={styles.listItem}>
          1.Stand tall with feet hip-width apart, arms bent at 90°.
        </Text>
        <Text style={styles.listItem}>
          2. Jog in place, lifting one knee up toward your chest.
        </Text>
        <Text style={styles.listItem}>
          3. Alternate legs quickly, pumping your arms like you’re running.
        </Text>
        <Text style={styles.listItem}>
          4. Maintain a steady rhythm and upright posture.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>
          - Leaning backward or hunching forward, keep spine straight.
        </Text>
        <Text style={styles.listItem}>
          - Not raising knees high enough, aim at least hip level.
        </Text>
        <Text style={styles.listItem}>
          - Slamming your feet down, land softly to avoid joint strain.
        </Text>
        <Text style={styles.listItem}>
          - Tense shoulders or stiff arms, keep arms relaxed and moving.
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
