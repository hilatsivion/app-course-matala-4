import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/MainScreenStyles";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shopping List</Text>
      <Button title="מעבר לרשימה" onPress={() => navigation.navigate("List")} />
    </View>
  );
}
