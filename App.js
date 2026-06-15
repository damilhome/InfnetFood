import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home.jsx";
import Login from "./screens/Login.jsx";
import { TemaProvider, useTema } from "./contexts/TemaContext.js";
import AuthContext, { AuthProvider } from "./contexts/AuthProvider.js";
import { useContext } from "react";
import SplashScreen from "./screens/SplashScreen.jsx";

const Stack = createStackNavigator();

function AppNavigator() {
  const authContext = useContext(AuthContext);
  const { usuario, carregamentoInicial } = authContext;
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

  if (carregamentoInicial) return <SplashScreen />;

  return (
    <NavigationContainer>
      {usuario === null ? (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={stackNavigatorStyles}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={stackNavigatorStyles}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <TemaProvider>
        <AppNavigator />
      </TemaProvider>
    </AuthProvider>
  );
}
