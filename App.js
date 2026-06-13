import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home.jsx";
import Login from "./screens/Login.jsx";
import { TemaProvider, useTema } from "./contexts/TemaContext.js";

const Stack = createStackNavigator();

function AppNavigator() {
  const { cores } = useTema();

  const stackNavigatorStyles = {
    headerStyle: {
      backgroundColor: cores.tabBarBackground,
    },
    headerTintColor: cores.textPrimary,
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
    },
    headerTitleAlign: "center",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={stackNavigatorStyles}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <TemaProvider>
      <AppNavigator />
    </TemaProvider>
  );
}
