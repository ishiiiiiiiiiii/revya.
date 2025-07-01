import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function ChooseMood({ navigation }) {
  const moods = [
    { label: "Anger", image: require("../assets/angry.png") },
    { label: "Stress", image: require("../assets/stress2.png") },
    { label: "Happiness", image: require("../assets/happy.png") },
    { label: "Doubt", image: require("../assets/doubt2.png") },
    { label: "Chill", image: require("../assets/chill2.png") },
    { label: "Energetic", image: require("../assets/energy2.png") },
  ];

  const handleMoodSelect = (mood) => {
    console.log("Selected Mood:", mood);

    if (mood === "Anger") {
      navigation.navigate("Anger");
    } else if (mood === "Happiness") {
      navigation.navigate("Happy");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/bgnew.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Choose your current mood</Text>

        <View style={styles.moodContainer}>
          {moods.map((mood, index) => (
            <TouchableOpacity
              key={index}
              style={styles.moodButton}
              onPress={() => handleMoodSelect(mood.label)}
            >
              <Image source={mood.image} style={styles.moodImage} />
              <Text style={styles.moodLabel}>{mood.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
    textAlign: "center",
  },
  moodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  moodButton: {
    margin: 15,
    alignItems: "center",
  },
  moodImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
  },
  moodLabel: {
    marginTop: 5,
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
});
