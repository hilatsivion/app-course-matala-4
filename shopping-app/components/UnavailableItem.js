import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icons from "../assets/icons/Icons";

export default function UnavailableItem({ item, onCheck, onDelete }) {
  return (
    <View style={styles.container}>
      {/* Checkbox */}
      <TouchableOpacity
        onPress={() => onCheck(item.id)}
        style={styles.iconContainer}
      >
        <Image source={Icons.CheckboxFull} style={styles.icon} />
      </TouchableOpacity>

      {/* Item Text */}
      <Text style={styles.itemText}>{item.name}</Text>

      {/* Trash Icon */}
      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.iconContainer}
      >
        <Image source={Icons.Trash} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#E5E5E5",
    elevation: 1,
  },
  iconContainer: {
    marginHorizontal: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
  },
});
