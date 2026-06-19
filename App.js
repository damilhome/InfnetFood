import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import AuthContext, { AuthProvider } from "./contexts/AuthProvider.js";
import { TemaProvider, useTema } from "./contexts/TemaContext.js";
import { ProdutosProvider } from "./contexts/ProdutosContext.js";

import Home from "./screens/Home.jsx";
import Login from "./screens/Login.jsx";
import SplashScreen from "./screens/SplashScreen.jsx";
import Produtos from "./screens/Produtos.jsx";
import DetalhesProduto from "./screens/DetalhesProduto.jsx";
import Restaurante from "./screens/Restaurante.jsx";
import { CarrinhoProvider } from "./contexts/CarrinhoContext.js";
import { PedidosProvider } from "./contexts/PedidosContext.js";

const Stack = createStackNavigator();

function AppNavigator() {
  const authContext = useContext(AuthContext);
  const { usuario, carregamentoInicial } = authContext;
  const { cores, modoEscuro } = useTema();

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
    <CarrinhoProvider>
      <PedidosProvider>
        <ProdutosProvider>
          <NavigationContainer>
            <StatusBar
              style={modoEscuro ? "light" : "dark"}
              translucent={false}
              backgroundColor={cores.background}
            />
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
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Home"
                  component={Home}
                />
                <Stack.Screen name="Produtos" component={Produtos} />
                <Stack.Screen name="Detalhes" component={DetalhesProduto} />
                <Stack.Screen name="Restaurante" component={Restaurante} />
              </Stack.Navigator>
            )}
          </NavigationContainer>
        </ProdutosProvider>
      </PedidosProvider>
    </CarrinhoProvider>
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
