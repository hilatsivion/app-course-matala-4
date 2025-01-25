import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";

export default function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.details}>{item.details}</Text>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F4FC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  details: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 16,
  },
});
