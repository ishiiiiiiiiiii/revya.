import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PlanksInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planks</Text>

      <Text style={styles.description}>
        Planks are an excellent core exercise that also engages your shoulders,
        back, and glutes. Get into a push-up position but rest on your forearms.
        Keep your body in a straight line from head to heels. Hold this position
        while keeping your core tight.
      </Text>

      <Text style={styles.tips}>
        🔑 Tip: Don’t let your hips sag — keep your back flat!
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
    width: "70%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
