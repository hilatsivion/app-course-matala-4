import React, { useContext } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import AvailableItem from "../components/AvailableItem";
import UnavailableItem from "../components/UnavailableItem";
import Navbar from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from "../App";
import Icons from "../assets/icons/Icons";

export default function ListScreen() {
  const navigation = useNavigation();
  const { items, setItems } = useContext(ItemsContext);

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
      {items.length === 0 ? ( // Check if the list is empty
        <Text style={styles.noItemsText}>No items yet</Text>
      ) : (
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
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddItem")}
      >
        <View style={styles.addIcon}>
          <Image source={Icons.Add} style={styles.icon} />
        </View>
        <Text style={styles.addButtonText}>Add Item</Text>
      </TouchableOpacity>

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
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  noItemsText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    marginBottom: 90,
    padding: 14,
  },
  addIcon: {
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  addButtonText: {
    color: "#8B74FF",
  },
});
