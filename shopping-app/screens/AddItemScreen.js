import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import GlobalStyles from "../styles/GlobalStyles";

export default function AddItemScreen() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Add Item</Text>
      <TextInput
        placeholder="Item name..."
        style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />
      <TextInput
        placeholder="More info..."
        style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />

      <TouchableOpacity>
        <Text style={{ color: "#7A5BF8" }}>Add item to list</Text>
      </TouchableOpacity>

      <Navbar />
    </View>
  );
}
