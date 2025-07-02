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
    const fetchLatestUser = async () => {
      try {
        const res = await fetch("http://192.168.0.122:5000/api/users/latest");

        if (!res.ok) {
          throw new Error(`Server responded with ${res.status}`);
        }

        const data = await res.json();
        console.log("✅ Latest user:", data);
        setUserInfo(data);
      } catch (err) {
        console.error("❌ Fetch error:", err);
        Alert.alert("Error", "Failed to load user info.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestUser();
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
      source={require("../assets/bgnew.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>

        {userInfo ? (
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Name: {userInfo.name || "N/A"}</Text>
            <Text style={styles.infoText}>Age: {userInfo.age || "N/A"}</Text>
            <Text style={styles.infoText}>Gender: {userInfo.gender || "N/A"}</Text>
            <Text style={styles.infoText}>Height: {userInfo.height || "N/A"}</Text>
            <Text style={styles.infoText}>Weight: {userInfo.weight || "N/A"}</Text>
            <Text style={styles.infoText}>BMI: {userInfo.bmi || "N/A"}</Text>
            <Text style={styles.infoText}>
              Goals: {Array.isArray(userInfo.goal) ? userInfo.goal.join(", ") : "N/A"}
            </Text>
            <Text style={styles.infoText}>
              Food Restrictions:{" "}
              {Array.isArray(userInfo.restrictions)
                ? userInfo.restrictions.join(", ")
                : "N/A"}
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
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    padding: 10,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
    color: "#000",
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
