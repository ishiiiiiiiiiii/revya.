import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function IntakeSummary({ route, navigation }) {
  const { water, soda, caffeine, weeklyData = [] } = route.params;

  const waterGoal = 3000;
  const sodaGoal = 500;
  const caffeineGoal = 400;

  const getBarWidth = (value, goal) => {
    const percent = Math.min((value / goal) * 100, 100);
    return `${percent}%`;
  };

  // Determine current day count (max 7)
  const currentDay = weeklyData.length + 1;

  // Prepare updated weekly data by adding today's intake
  const updatedWeeklyData = [
    ...weeklyData,
    { day: currentDay, water, caffeine, soda },
  ];

  return (
    <ImageBackground
      source={require("../assets/bghomepg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Your Daily Intake Summary</Text>

        <Text style={styles.label}>
          Water Intake: {water} ml / {waterGoal} ml
        </Text>
        <View style={styles.bar}>
          <View
            style={[
              styles.fill,
              {
                width: getBarWidth(water, waterGoal),
                backgroundColor: "blue",
              },
            ]}
          />
        </View>

        <Text style={styles.label}>
          Soda Intake: {soda} ml / {sodaGoal} ml
        </Text>
        <View style={styles.bar}>
          <View
            style={[
              styles.fill,
              { width: getBarWidth(soda, sodaGoal), backgroundColor: "yellow" },
            ]}
          />
        </View>

        <Text style={styles.label}>
          Caffeine Intake: {caffeine} mg / {caffeineGoal} mg
        </Text>
        <View style={styles.bar}>
          <View
            style={[
              styles.fill,
              {
                width: getBarWidth(caffeine, caffeineGoal),
                backgroundColor: "brown",
              },
            ]}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("WeeklyGraph", {
              weeklyData: updatedWeeklyData,
            })
          }
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { padding: 20, paddingTop: 60 },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  label: { fontSize: 16, marginTop: 20, marginBottom: 5 },
  bar: {
    width: "100%",
    height: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  fill: {
    height: "100%",
  },
  button: {
    backgroundColor: "#007AFF",
    marginTop: 40,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
