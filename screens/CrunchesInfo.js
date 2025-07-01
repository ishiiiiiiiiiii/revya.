import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CrunchesInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crunches</Text>

      <Text style={styles.description}>
        Crunches are a classic bodyweight exercise that primarily target your
        abdominal muscles. Lie on your back, bend your knees, and keep your feet
        flat on the floor. Place your hands behind your head, lift your shoulders
        towards the ceiling using your abs, then slowly lower back down.
      </Text>

      <Text style={styles.tips}>
        🔑 Tip: Keep your neck relaxed and lift with your core, not your neck!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Exercise</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#555",
    marginBottom: 30,
    lineHeight: 26,
  },
  tips: {
    fontSize: 16,
    color: "#007AFF",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    width: "70
