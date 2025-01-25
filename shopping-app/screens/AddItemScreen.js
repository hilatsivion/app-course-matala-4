import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Navbar from "../components/Navbar";
import { ItemsContext } from "../App";

export default function AddItemScreen({ navigation }) {
  const { items, setItems } = useContext(ItemsContext);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const addItem = () => {
    if (name.trim().length < 3) {
      setError("Item name must be at least 3 characters long");
      return;
    }

    const newItem = {
      id: (items.length + 1).toString(), // Generate unique ID based on array length
      name,
      details,
      completed: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    navigation.navigate("List"); // Navigate back to List page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Item name..."
        value={name}
        onChangeText={(text) => {
          setName(text);
          if (text.length >= 3) setError(""); // Clear error if input is valid
        }}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="More info..."
        value={details}
        onChangeText={setDetails}
      />
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add item to list</Text>
      </TouchableOpacity>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4FC",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  button: {
    backgroundColor: "#7A5BF8",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
