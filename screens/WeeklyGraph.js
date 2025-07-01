import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function WeeklyGraph({ route }) {
  const { weeklyData } = route.params;

  const screenWidth = Dimensions.get("window").width;

  const labels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "MaxQty/D",
  ];

  const prepareData = (type, maxValue) => {
    const data = [];
    for (let i = 1; i <= 7; i++) {
      const dayData = weeklyData.find((entry) => entry.day === i);
      data.push(dayData ? dayData[type] : 0);
    }
    data.push(maxValue);
    return data;
  };

  const waterData = prepareData("water", 3000);
  const sodaData = prepareData("soda", 500);
  const caffeineData = prepareData("caffeine", 400);

  const chartConfigTemplate = (barColor) => ({
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    fillShadowGradient: barColor,
    fillShadowGradientOpacity: 1,
    color: () => barColor,
    labelColor: () => "#000",
    propsForBackgroundLines: { stroke: "#ccc" },
    barPercentage: 0.4,
  });

  return (
    <ImageBackground
      source={require("../assets/bghomepg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container} horizontal={false}>
        <Text style={styles.heading}>Water Weekly Intake (ml)</Text>
        <BarChart
          data={{
            labels,
            datasets: [{ data: waterData }],
          }}
          width={screenWidth}
          height={300}
          yAxisSuffix="ml"
          fromZero
          withInnerLines
          yAxisInterval={500}
          chartConfig={chartConfigTemplate("#007AFF")}
          style={styles.graph}
          showValuesOnTopOfBars
        />

        <Text style={styles.heading}>Soda Weekly Intake (ml)</Text>
        <BarChart
          data={{
            labels,
            datasets: [{ data: sodaData }],
          }}
          width={screenWidth}
          height={300}
          yAxisSuffix="ml"
          fromZero
          withInnerLines
          yAxisInterval={100}
          chartConfig={chartConfigTemplate("#FFD700")}
          style={styles.graph}
          showValuesOnTopOfBars
        />

        <Text style={styles.heading}>Caffeine Weekly Intake (mg)</Text>
        <BarChart
          data={{
            labels,
            datasets: [{ data: caffeineData }],
          }}
          width={screenWidth}
          height={300}
          yAxisSuffix="mg"
          fromZero
          withInnerLines
          yAxisInterval={100}
          chartConfig={chartConfigTemplate("#A0522D")}
          style={styles.graph}
          showValuesOnTopOfBars
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 10 },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 45,
    color: "#000",
  },
  graph: {
    marginVertical: 20,
    borderRadius: 16,
    marginLeft: -10,
  },
});
