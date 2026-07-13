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
import Checkout from "./screens/Checkout.jsx";
import CadastrarEndereco from "./screens/CadastrarEndereco.jsx";
import { CarrinhoProvider } from "./contexts/CarrinhoContext.js";
import { PedidosProvider } from "./contexts/PedidosContext.js";
import EnderecoProvider from "./contexts/EnderecoContext.js";
import { CheckoutProvider } from "./contexts/CheckoutContex.js";
import Configuracoes from "./screens/Configuracoes.jsx";
import Enderecos from "./screens/Enderecos.jsx";
import EditarEndereco from "./screens/EditarEndereco.jsx";
import DadosPerfil from "./screens/DadosPerfil.jsx";

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
    <EnderecoProvider>
      <CarrinhoProvider>
        <PedidosProvider>
          <ProdutosProvider>
            <CheckoutProvider>
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
                    <Stack.Screen name="Checkout" component={Checkout} />
                    <Stack.Screen
                      name="Cadastrar endereço"
                      component={CadastrarEndereco}
                    />
                    <Stack.Screen
                      name="Configuracoes"
                      component={Configuracoes}
                    />
                    <Stack.Screen name="Endereços" component={Enderecos} />
                    <Stack.Screen
                      name="Editar Endereço"
                      component={EditarEndereco}
                    />
                    <Stack.Screen name="Dados Perfil" component={DadosPerfil} />
                  </Stack.Navigator>
                )}
              </NavigationContainer>
            </CheckoutProvider>
          </ProdutosProvider>
        </PedidosProvider>
      </CarrinhoProvider>
    </EnderecoProvider>
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
