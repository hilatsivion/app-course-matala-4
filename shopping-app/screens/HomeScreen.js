import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";
import { ItemsContext } from "../App";

export default function HomeScreen({ navigation }) {
  const { items } = useContext(ItemsContext);

  const totalItems = items.length;
  const completedItems = items.filter((item) => item.completed).length;
  const remainingItems = totalItems - completedItems;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shopping App 🛒</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Number of Total Items</Text>
        <Text style={styles.cardValue}>{totalItems}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Number of Checked Items</Text>
        <Text style={styles.cardValue}>{completedItems}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Number of Remaining Items</Text>
        <Text style={styles.cardValue}>{remainingItems}</Text>
      </View>
      <Text style={styles.link} onPress={() => navigation.navigate("List")}>
        Go to the list
      </Text>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4FC",
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFF",
    padding: 24,
    marginBottom: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: "#000",
  },
  cardValue: {
    fontSize: 16,
    color: "#7A5BF8",
    fontWeight: "bold",
  },
  link: {
    color: "#7A5BF8",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
