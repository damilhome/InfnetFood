import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";

export default function CardProduto({ produto }) {
  const { cores } = useTema();
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          borderBottomColor: cores.inputBorder,
          transform: [{ scale: pressed ? 0.96 : 1 }],
        },
      ]}
    >
      <View style={styles.infos}>
        <View>
          <Text style={[styles.titulo, { color: cores.textPrimary }]}>
            {produto.nome}
          </Text>
          <Text style={[styles.tamanho, { color: cores.textSecondary }]}>
            {produto.tamanho}
          </Text>
          <View style={styles.entrega}>
            <MaterialIcons
              name="motorcycle"
              size={15}
              color={cores.textSecondary}
            />
            <Text style={{ color: cores.textSecondary }}>R$ 7,00</Text>
          </View>
        </View>
        <Text style={{ color: cores.textPrimary, fontWeight: "bold" }}>
          R$ {produto.preco.toFixed(2).replace(".", ",")}
        </Text>
      </View>
      <Image source={{ uri: produto.imagem }} style={styles.imagem} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  imagem: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infos: {
    justifyContent: "space-between",
    height: "100%",
  },
  entrega: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
