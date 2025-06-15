import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, Picker } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [useMetric, setUseMetric] = useState(true); // true: cm/kg, false: inch/lbs

  const calculateBMI = () => {
    if (!height || !weight) return '';
    let h = parseFloat(height);
    let w = parseFloat(weight);

    if (!useMetric) {
      // Convert to metric
      h = h * 2.54; // inches to cm
      w = w * 0.453592; // lbs to kg
    }

    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Age</Text>
      <TextInput style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric" />

      <Text style={styles.label}>Gender</Text>
      <TextInput style={styles.input} value={gender} onChangeText={setGender} />

      <Text style={styles.label}>
        Height ({useMetric ? 'cm' : 'in'}) & Weight ({useMetric ? 'kg' : 'lbs'})
      </Text>
      <TextInput
        placeholder="Height"
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        placeholder="Weight"
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <View style={styles.switchContainer}>
        <Text>Use Metric (cm/kg): </Text>
        <Switch value={useMetric} onValueChange={setUseMetric} />
      </View>

      <Text style={styles.label}>BMI (Auto-calculated): {calculateBMI()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    borderRadius: 5,
    marginTop: 5
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  }
});