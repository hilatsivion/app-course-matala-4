import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import GlobalStyles from "../styles/GlobalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>My Shopping App</Text>

      <View>
        <Text>Amount of all items: 3</Text>
        <Text>Deleted items: 1</Text>
        <Text>Remain items: 2</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={{ color: "#7A5BF8", marginTop: 20 }}>Go to the list</Text>
      </TouchableOpacity>

      <Navbar />
    </View>
  );
}
