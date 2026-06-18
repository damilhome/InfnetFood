import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { deslogarUsuario } from "../services/autenticarFirebase";
import { useTema } from "../contexts/TemaContext";

import Categorias from "./Categorias";
import Produtos from "./Produtos";
import Carrinho from "./Carrinho";
import Perfil from "./Perfil";
import Pedidos from "./Pedidos";

const Tab = createBottomTabNavigator();

export default function App() {
  const { cores } = useTema();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: cores.primary,
        },
        tabBarActiveTintColor: "#1A1A1A",
        tabBarInactiveTintColor: "#1A1A1A",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Produtos") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === "Carrinho") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Pedidos") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Categorias} />
      {/* <Tab.Screen name="Produtos" component={Produtos} /> */}
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Pedidos" component={Pedidos} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

/* 
list-box-outline
MaterialCommunityIcons

*/
