import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

export default function HappySP({ navigation }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(120); // 2 mins
  const [intervalId, setIntervalId] = useState(null);
  const videoRef = useRef(null);

  const startStopHandler = () => {
    if (isPlaying) {
      setIsPlaying(false);
      clearInterval(intervalId);
      videoRef.current.pauseAsync();
    } else {
      setIsPlaying(true);
      videoRef.current.playAsync();
      const id = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(id);
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <ImageBackground
      source={require("../assets/happybg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Video
          ref={videoRef}
          source={require("../assets/spdplank.mp4")}
          style={styles.video}
          resizeMode="contain"
          isLooping
          shouldPlay={false}
        />

        <Text style={styles.timer}>{formatTime(timer)}</Text>

        <TouchableOpacity onPress={() => navigation.navigate("SPInfo")}>
          <Text style={styles.exercise}>Spiderman Planks^</Text>
        </TouchableOpacity>

        <Text style={styles.duration}>
          Duration Completed:{" "}
          {timer === 0 ? "2 minutes" : `${120 - timer} seconds`}
        </Text>

        <TouchableOpacity style={styles.startButton} onPress={startStopHandler}>
          <Ionicons
            name={isPlaying ? "pause-circle" : "play-circle"}
            size={60}
            color="#fff"
          />
        </TouchableOpacity>

        <Text style={styles.progress}>Exercise 4/4</Text>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("ChooseWorkout")}
        >
          <Text style={styles.nextText}>FINISH</Text>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  video: {
    width: "115%",
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  timer: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  exercise: {
    fontSize: 22,
    color: "#800080",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 15,
  },
  duration: {
    fontSize: 16,
    color: "#8A2BE2",
    marginBottom: 25,
  },
  startButton: {
    marginBottom: 40,
  },
  progress: {
    fontSize: 14,
    color: "#000",
    position: "absolute",
    bottom: 70,
  },
  nextButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#FF4500",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  nextText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
