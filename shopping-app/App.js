import React, { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import DetailsScreen from "./screens/DetailsScreen";
import AddItemScreen from "./screens/AddItemScreen";

export const ItemsContext = createContext();

const Stack = createStackNavigator();

export default function App() {
  const [items, setItems] = useState([
    // {
    //   id: "1",
    //   name: "Item #example",
    //   completed: false,
    //   details: "Details about Item example",
    // },
  ]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="AddItem" component={AddItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemsContext.Provider>
  );
}
