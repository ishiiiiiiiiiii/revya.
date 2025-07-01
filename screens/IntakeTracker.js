import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { BASE_URL } from "../constants";

const caffeineChart = {
  coffee: {
    "Instant Coffee": 0.48,
    "Filter Coffee": 0.8,
    "Decaf Coffee": 0.028,
  }, // mg per ml
  tea: {
    "Milk Tea": 0.2,
    "Black Tea": 0.2,
    "Green Tea": 0.12,
    "Herbal Tea": 0.04,
  }, // mg per ml
  soda: {
    "Coca Cola": 0.298,
    Pepsi: 0.3,
    "Mountain Dew": 0.22,
    Sprite: 0.087,
    Fanta: 0.121,
    "Red Bull": 0.329,
  },
};

let dayCount = 1;

export default function IntakeTracker({ navigation, route }) {
  const username = route.params?.username;

  const [age, setAge] = useState("");
  const [coffeeVolume, setCoffeeVolume] = useState("");
  const [coffeeType, setCoffeeType] = useState("");
  const [teaVolume, setTeaVolume] = useState("");
  const [teaType, setTeaType] = useState("");
  const [sodaVolume, setSodaVolume] = useState("");
  const [sodaType, setSodaType] = useState("");
  const [waterIntake, setWaterIntake] = useState("");
  const [otherFluids, setOtherFluids] = useState("");

  const parseVolume = (volStr) => {
    if (!volStr) return 0;
    if (volStr.includes("ml")) return parseFloat(volStr);
    if (volStr.includes("L")) return parseFloat(volStr) * 1000;
    return parseFloat(volStr) || 0;
  };

  const calculateCaffeine = () => {
    let total = 0;
    if (coffeeVolume && coffeeType) {
      const vol = parseVolume(coffeeVolume);
      total += vol * caffeineChart.coffee[coffeeType] || 0;
    }
    if (teaVolume && teaType) {
      const vol = parseVolume(teaVolume);
      total += vol * caffeineChart.tea[teaType] || 0;
    }
    if (sodaVolume && sodaType) {
      const vol = parseVolume(sodaVolume);
      total += vol * caffeineChart.soda[sodaType] || 0;
    }
    return total;
  };

  const calculateWater = () => {
    const water = parseFloat(waterIntake) || 0;
    const other = parseFloat(otherFluids) || 0;
    return (water + other) * 1000;
  };

  const handleSubmit = async () => {
    const totalCaffeine = calculateCaffeine();
    const totalWater = calculateWater();

    Alert.alert(
      "Your Intake Summary",
      `Day: ${dayCount}\nAge: ${age || "Not entered"}\n\nCoffee: ${
        coffeeVolume || "0"
      } of ${coffeeType || "N/A"}\nTea: ${teaVolume || "0"} of ${
        teaType || "N/A"
      }\nSoda: ${sodaVolume || "0"} of ${
        sodaType || "N/A"
      }\nTotal Caffeine: ${totalCaffeine.toFixed(2)} mg\n\nWater Intake: ${
        waterIntake || 0
      } L\nOther Fluids: ${otherFluids || 0} L\nTotal Water: ${totalWater} ml`
    );

    const payload = {
      username,
      day: dayCount,
      totalCaffeine: Math.round(totalCaffeine),
      totalWater: Math.round(totalWater),
    };

    try {
      await fetch(`${BASE_URL}/api/healthlog`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("Intake log saved for Day", dayCount);
      dayCount++;
      navigation.navigate("IntakeSummary", {
        water: totalWater,
        soda: parseVolume(sodaVolume),
        caffeine: Math.round(totalCaffeine),
      });
    } catch (err) {
      console.error("Error saving intake log:", err);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/bghomepg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Caffeine and Water Intake Log</Text>

        <Text style={styles.label}>Enter your age:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
          placeholder="e.g., 21"
        />

        <Text style={styles.subHeading}>Coffee Intake</Text>
        <Text style={styles.label}>Total volume (ml or L):</Text>
        <TextInput
          style={styles.input}
          value={coffeeVolume}
          onChangeText={setCoffeeVolume}
          placeholder="e.g., 250 ml or 0.3 L"
        />
        <Text style={styles.label}>Type of coffee:</Text>
        <Picker
          selectedValue={coffeeType}
          onValueChange={setCoffeeType}
          style={styles.picker}
        >
          <Picker.Item label="Select type" value="" />
          {Object.keys(caffeineChart.coffee).map((type) => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>

        <Text style={styles.subHeading}>Tea Intake</Text>
        <Text style={styles.label}>Total volume (ml or L):</Text>
        <TextInput
          style={styles.input}
          value={teaVolume}
          onChangeText={setTeaVolume}
          placeholder="e.g., 200 ml or 0.2 L"
        />
        <Text style={styles.label}>Type of tea:</Text>
        <Picker
          selectedValue={teaType}
          onValueChange={setTeaType}
          style={styles.picker}
        >
          <Picker.Item label="Select type" value="" />
          {Object.keys(caffeineChart.tea).map((type) => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>

        <Text style={styles.subHeading}>Soda / Energy Drink Intake</Text>
        <Text style={styles.label}>Volume (ml or L):</Text>
        <TextInput
          style={styles.input}
          value={sodaVolume}
          onChangeText={setSodaVolume}
          placeholder="e.g., 500 ml or 1 L"
        />
        <Text style={styles.label}>Type:</Text>
        <Picker
          selectedValue={sodaType}
          onValueChange={setSodaType}
          style={styles.picker}
        >
          <Picker.Item label="Select drink" value="" />
          {Object.keys(caffeineChart.soda).map((type) => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>

        <Text style={styles.subHeading}>Water Intake</Text>
        <Text style={styles.label}>Water (liters):</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="e.g., 2.5"
          value={waterIntake}
          onChangeText={setWaterIntake}
        />

        <Text style={styles.label}>Other fluids (liters):</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="e.g., 0.5"
          value={otherFluids}
          onChangeText={setOtherFluids}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { padding: 20, paddingBottom: 60 },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 25,
    marginBottom: 10,
  },
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    backgroundColor: "#fff",
    color: "#000",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 5,
    backgroundColor: "#f5f5f5",
    color: "#000",
  },
  button: {
    backgroundColor: "#007AFF",
    marginTop: 30,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
