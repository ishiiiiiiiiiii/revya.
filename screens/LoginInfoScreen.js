import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ImageBackground,
} from "react-native";

export default function LoginInfoScreen({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.1.8:5000/latestuser")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUserInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        Alert.alert("Error", "Failed to load user info.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ marginTop: 100 }}
        size="large"
        color="#007AFF"
      />
    );
  }

  return (
    <ImageBackground
      source={require("../assets/bgnew.png")} // 🔁 Make sure the path is correct
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        {userInfo ? (
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Name: {userInfo.name}</Text>
            <Text style={styles.infoText}>Age: {userInfo.age}</Text>
            <Text style={styles.infoText}>Gender: {userInfo.gender}</Text>
            <Text style={styles.infoText}>Height: {userInfo.height}</Text>
            <Text style={styles.infoText}>Weight: {userInfo.weight}</Text>
            <Text style={styles.infoText}>BMI: {userInfo.bmi}</Text>
            <Text style={styles.infoText}>
              Goals: {userInfo.goal?.join(", ")}
            </Text>
            <Text style={styles.infoText}>
              Food Restrictions:{" "}
              {Array.isArray(userInfo.restrictions)
                ? userInfo.restrictions.join(", ")
                : userInfo.restrictions}
            </Text>
          </View>
        ) : (
          <Text style={styles.infoText}>No user data found.</Text>
        )}

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 30,
    textAlign: "center",
  },
  infoBox: {
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Optional: remove or reduce for full image exposure
    borderRadius: 10,
    padding: 10,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
    color: "#000", // Ensure text is visible on your background
  },
  nextButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
