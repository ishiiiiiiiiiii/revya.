import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function stresswallplanks() {
  return (
    <ImageBackground
      source={require("../assets/stressbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Wall Planks</Text>

        <Text style={styles.listItem}>
          1. Place hands on the wall or floor (depending on variation).
        </Text>
        <Text style={styles.listItem}>
          2. Align your body into a straight line from head to heels.
        </Text>
        <Text style={styles.listItem}>
          3. Engage your core and hold for 20–60 seconds.
        </Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Head pointing up or down.</Text>
        <Text style={styles.listItem}>- Not engaging the core.</Text>
        
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