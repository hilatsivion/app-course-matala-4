import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icons from "../assets/icons/Icons";

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Home Button */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Image source={Icons.Home} style={styles.icon} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* List Button */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("List")}
      >
        <Image source={Icons.List} style={styles.icon} />
        <Text style={styles.navText}>List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20, // Elevated to avoid overlap with the screen edges
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
    marginHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 28, // Increased size for better visibility
    height: 28,
    marginBottom: 4, // Adds spacing between the icon and the text
  },
  navText: {
    fontSize: 12,
    color: "#7A5BF8",
  },
});
