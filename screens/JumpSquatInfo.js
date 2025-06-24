import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function JumpSquatInfo() {
  return (
    <ImageBackground
      source={require("../assets/angerbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Jump Squats</Text>

        <Text style={styles.listItem}>
          1. Squat down with feet shoulder-width apart.
        </Text>
        <Text style={styles.listItem}>
          2. Jump up explosively, swinging arms.
        </Text>
        <Text style={styles.listItem}>
          3. Land softly with knees slightly bent.
        </Text>
        <Text style={styles.listItem}>4. Go straight into the next squat.</Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Knees collapsing inward.</Text>
        <Text style={styles.listItem}>- Landing hard/stiff.</Text>
        <Text style={styles.listItem}>- Leaning forward too much.</Text>
        <Text style={styles.listItem}>- Rushing and losing form.</Text>
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
