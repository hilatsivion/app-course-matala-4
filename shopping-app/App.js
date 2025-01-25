import React, { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import DetailsScreen from "./screens/DetailsScreen";

export const ItemsContext = createContext();

const Stack = createStackNavigator();

export default function App() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Item #1111",
      completed: false,
      details: "Details about Item #1111.",
    },
    {
      id: "2",
      name: "Item #2222",
      completed: false,
      details: "Details about Item #2222.",
    },
    {
      id: "3",
      name: "Item #3333",
      completed: true,
      details: "Details about Item #3333.",
    },
    {
      id: "4",
      name: "Item #3333",
      completed: true,
      details: "Details about Item #3333.",
    },
    {
      id: "5",
      name: "Item #3333",
      completed: false,
      details: "Details about Item #3333.",
    },
  ]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemsContext.Provider>
  );
}
