import { StyleSheet, Text, View, Switch, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTema } from "../contexts/TemaContext";
import ActionBtn from "../components/ActionBtn";
import { deslogarUsuario } from "../services/autenticarFirebase";

export default function Configuracoes() {
  const navigation = useNavigation();
  const { cores, modoEscuro, alterarTema } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        Configurações
      </Text>
      <View style={styles.configs}>
        <View style={styles.switcher}>
          <Text style={[styles.opcao, { color: cores.textPrimary }]}>
            Modo escuro
          </Text>
          <Switch
            value={modoEscuro}
            onValueChange={alterarTema}
            trackColor={{
              false: "#cbd5e1",
              true: "#2563eb",
            }}
            thumbColor="#f8fafc"
          />
        </View>
        <ActionBtn txt="Sair" executar={deslogarUsuario} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 45,
  },
  titulo: {
    padding: 15,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  configs: {
    flex: 1,
    justifyContent: "space-between",
  },
  switcher: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  opcao: {
    fontSize: 16,
  },
});
