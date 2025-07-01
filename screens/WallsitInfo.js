import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function WallsitInfo() {
  return (
    <ImageBackground
      source={require("../assets/doubtbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Wall Sits</Text>

        <Text style={styles.listItem}>
          1. Stand with your back flat against a wall.
        </Text>
        <Text style={styles.listItem}>
          2. Slide down until your knees are at a 90-degree angle.
        </Text>
        <Text style={styles.listItem}>
          3. Keep your back and shoulders pressed to the wall.
        </Text>
        <Text style={styles.listItem}>
          4. Hold this position for the desired time.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Knees going beyond toes.</Text>
        <Text style={styles.listItem}>- Hips not at knee level.</Text>
        <Text style={styles.listItem}>- Arching the back off the wall.</Text>
        <Text style={styles.listItem}>- Not keeping core tight.</Text>
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
    fontFamily: "Cochin",
  },
  mistakeHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 10,
    fontFamily: "sans-serif-medium",
  },
  listItem: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 8,
  },
});
