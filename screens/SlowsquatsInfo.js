import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function SlowsquatsInfo() {
  return (
    <ImageBackground
      source={require("../assets/doubtbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Slow Squats</Text>

        <Text style={styles.listItem}>
          1. Stand with feet shoulder-width apart.
        </Text>
        <Text style={styles.listItem}>
          2. Lower your body slowly into a squat position.
        </Text>
        <Text style={styles.listItem}>
          3. Keep your chest up and back straight.
        </Text>
        <Text style={styles.listItem}>
          4. Pause briefly at the bottom, then rise back up slowly.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Letting knees go past toes.</Text>
        <Text style={styles.listItem}>- Rounding the back.</Text>
        <Text style={styles.listItem}>- Moving too quickly.</Text>
        <Text style={styles.listItem}>- Not engaging core and glutes.</Text>
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
