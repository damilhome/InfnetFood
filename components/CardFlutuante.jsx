import { StyleSheet, View, Text, Pressable } from "react-native";
import { useTema } from "../contexts/TemaContext";
import { Ionicons } from "@expo/vector-icons";
import ActionBtn from "./ActionBtn";

export default function CardFlutuante({ restaurante, fecharCard }) {
  const { cores } = useTema();

  function handleDetalhes() {}

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: cores.background, borderColor: cores.inputColor },
      ]}
    >
      <View style={styles.cabecalho}>
        <Text style={[styles.nomeRestaurante, { color: cores.textPrimary }]}>
          {restaurante.nome}
        </Text>
        <Pressable onPress={fecharCard}>
          <Ionicons name="close" size={25} color={cores.textPrimary} />
        </Pressable>
      </View>
      <Text
        style={{
          color: cores.textSecondary,
          paddingBottom: 10,
          lineHeight: 20,
        }}
      >
        {restaurante.descricao}
      </Text>
      <ActionBtn txt="Detalhes" executar={handleDetalhes} carregando={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    gap: 10,
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nomeRestaurante: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
