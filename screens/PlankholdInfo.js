import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function PlankholdInfo() {
  return (
    <ImageBackground
      source={require("../assets/doubtbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do a Plank Hold</Text>

        <Text style={styles.listItem}>
          1. Start face down, supporting your body on forearms and toes.
        </Text>
        <Text style={styles.listItem}>
          2. Keep your body in a straight line from head to heels.
        </Text>
        <Text style={styles.listItem}>
          3. Engage your core, glutes, and legs.
        </Text>
        <Text style={styles.listItem}>
          4. Hold this position for the desired time.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Dropping the hips.</Text>
        <Text style={styles.listItem}>- Arching the back.</Text>
        <Text style={styles.listItem}>- Looking up or forward too much.</Text>
        <Text style={styles.listItem}>- Holding breath — keep breathing!</Text>
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
