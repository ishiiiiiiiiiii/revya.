import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function PushupInfo() {
  return (
    <ImageBackground
      source={require("../assets/doubtbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainHeading}>✅ How to Do Push-Ups</Text>

        <Text style={styles.listItem}>1. Place hands shoulder-width apart.</Text>
        <Text style={styles.listItem}>2. Keep your body in a straight line.</Text>
        <Text style={styles.listItem}>3. Lower chest until elbows are at 90°.</Text>
        <Text style={styles.listItem}>4. Push back up powerfully.</Text>

        <Text style={styles.mistakeHeading}>❌ Common Mistakes</Text>

        <Text style={styles.listItem}>- Sagging hips.</Text>
        <Text style={styles.listItem}>- Flaring elbows too wide.</Text>
        <Text style={styles.listItem}>- Not going deep enough.</Text>
        <Text style={styles.listItem}>- Neck craning or dipping.</Text>
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
