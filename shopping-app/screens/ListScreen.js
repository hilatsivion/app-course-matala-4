import React, { useContext } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import AvailableItem from "../components/AvailableItem";
import UnavailableItem from "../components/UnavailableItem";
import Navbar from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from "../App"; // Import the context

export default function ListScreen() {
  const navigation = useNavigation();
  const { items, setItems } = useContext(ItemsContext); // Access items and setItems from context

  const toggleItemStatus = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const navigateToDetails = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    navigation.navigate("Details", { item: selectedItem });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.completed ? (
            <UnavailableItem
              item={item}
              onCheck={toggleItemStatus}
              onDelete={deleteItem}
            />
          ) : (
            <AvailableItem
              item={item}
              onCheck={toggleItemStatus}
              onArrowPress={navigateToDetails}
            />
          )
        }
      />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4FC",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 16,
  },
});
