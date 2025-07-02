import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { API_BASE_URL } from "../config"; // ✅ Import your base URL here

export default function SignupScreen2({ route, navigation }) {
  const { userData } = route.params;
  const [goal, setGoal] = useState("");
  const [restrictions, setRestrictions] = useState([]);

  const goalOptions = ["Lose weight", "Gain weight", "None of these"];
  const dietOptions = [
    "Gluten free",
    "Limited sugar intake",
    "Vegetarian",
    "Non vegetarian",
    "Lactose intolerant",
    "Nut free",
    "Vegan",
  ];

  const toggleRestriction = (item) => {
    setRestrictions((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleSubmit = async () => {
    if (!goal) {
      Alert.alert("Validation Error", "Please select a goal.");
      return;
    }

    const fullData = {
      ...userData,
      goal: [goal],
      restrictions,
    };

    console.log("📦 Sending to backend:", fullData);

    try {
      // ✅ Matches your Express: app.use('/api') + router.post('/add')
      const res = await axios.post(`${API_BASE_URL}/api/add`, fullData);

      console.log("✅ Backend Response:", res?.data);
      Alert.alert("Success", res?.data?.message || "User saved successfully");
      navigation.navigate("LoginInfo");
    } catch (error) {
      if (error.response) {
        console.error("❌ Backend Error:", error.response.data);
        Alert.alert(
          "Error",
          error.response.data?.message || "Failed to save data."
        );
      } else {
        console.error("❌ Network Error:", error.message);
        Alert.alert("Network Error", error.message || "Network error");
      }
    }
  };

  return (
    <ImageBackground
      source={require("../assets/bgnew.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Health Preferences</Text>

        <Text style={styles.question}>1. What are your goals?</Text>
        {goalOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => setGoal(option)}
          >
            <View style={styles.radioCircle}>
              {goal === option && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.question}>2. What are your diet restrictions?</Text>
        {dietOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => toggleRestriction(option)}
          >
            <View style={styles.checkbox}>
              {restrictions.includes(option) && (
                <View style={styles.checkedBox} />
              )}
            </View>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#fff",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
    color: "#fff",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  optionText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#fff",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: "#fff",
  },
  submitBtn: {
    marginTop: 30,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
