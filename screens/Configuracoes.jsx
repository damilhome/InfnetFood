import { StyleSheet, Text, View, Switch, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTema } from "../contexts/TemaContext";

export default function Configuracoes() {
  const navigation = useNavigation();
  const { cores, modoEscuro, alterarTema } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        Configurações
      </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 45,
  },
  titulo: {
    padding: 15,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
