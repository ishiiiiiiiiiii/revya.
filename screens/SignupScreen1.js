// screens/SignupScreen1.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function SignupScreen1({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [useMetric, setUseMetric] = useState(true);
  const [bmi, setBmi] = useState("");

  useEffect(() => {
    calculateBMI();
  }, [height, weight, useMetric]);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w) {
      setBmi("");
      return;
    }

    let bmiValue = 0;
    if (useMetric) {
      bmiValue = w / ((h / 100) * (h / 100));
    } else {
      bmiValue = (703 * w) / (h * h);
    }

    setBmi(bmiValue.toFixed(1));
  };

  const handleNext = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!name || !age || !gender || !h || !w) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const heightInMeters = useMetric ? h / 100 : h * 0.0254;
    const weightInKg = useMetric ? w : w * 0.453592;
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);

    const userData = {
      name,
      age: parseInt(age),
      gender,
      height,
      weight,
      useMetric,
      bmi: bmiValue.toFixed(2),
    };

    navigation.navigate("Signup2", { userData });
  };

  return (
    <ImageBackground
      source={require("../assets/bgnew.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={setGender}
        />

        <Text style={styles.label}>
          Height ({useMetric ? "cm" : "in"}) & Weight (
          {useMetric ? "kg" : "lbs"})
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Height"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Weight"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        <View style={styles.switchContainer}>
          <Text>Use Metric (cm/kg): </Text>
          <Switch value={useMetric} onValueChange={setUseMetric} />
        </View>

        {bmi ? <Text style={styles.bmiText}>Your BMI: {bmi}</Text> : null}

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 80,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginTop: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  bmiText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  nextText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
