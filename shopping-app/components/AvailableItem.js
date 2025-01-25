import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icons from "../assets/icons/Icons";

export default function AvailableItem({ item, onCheck, onArrowPress }) {
  return (
    <View style={styles.container}>
      {/* Checkbox */}
      <TouchableOpacity
        onPress={() => onCheck(item.id)}
        style={styles.iconContainer}
      >
        <Image source={Icons.CheckboxEmpty} style={styles.icon} />
      </TouchableOpacity>

      {/* Item Text */}
      <Text style={styles.itemText}>{item.name}</Text>

      {/* Arrow Icon */}
      {item.details && ( // Only show the arrow if details exist
        <TouchableOpacity
          onPress={() => onArrowPress(item.id)}
          style={styles.iconContainer}
        >
          <Image source={Icons.Arrow} style={styles.icon} />
        </TouchableOpacity>
      )}
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
    backgroundColor: "#FFF",
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
    color: "#333",
  },
});
