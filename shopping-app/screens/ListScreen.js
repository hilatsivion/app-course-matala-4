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
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddItem")}
      >
        <View style={styles.addIcon}>
          <Image source={Icons.Add} style={styles.icon} />
        </View>
        <Text style={styles.addButtonText}>add Item</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 16,
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    marginBottom: 60,
  },
  addButtonText: {
    color: "#8B74FF",
  },
});
