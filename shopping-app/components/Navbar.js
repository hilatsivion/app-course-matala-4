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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopColor: "#DDD",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: "#7A5BF8",
  },
});
