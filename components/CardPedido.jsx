import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";

export default function CardPedido({ pedido }) {
  const { cores } = useTema();

  return (
    <View style={[styles.card, { backgroundColor: cores.surface }]}>
      <View style={styles.tituloContainer}>
        <Text style={[styles.titulo, { color: cores.textPrimary }]}>
          {pedido.data}
        </Text>
        <Text style={[styles.titulo, { color: cores.textPrimary }]}>-</Text>
        <Text style={[styles.titulo, { color: cores.textPrimary }]}>
          {pedido.hora}
        </Text>
      </View>
      <View>
        {pedido.produtos.map((ped, index) => (
          <View key={index} style={styles.itemPedido}>
            <Text style={{ color: cores.textSecondary }}>
              {ped.quantidade}x {ped.nome}
            </Text>
            <Text style={{ color: cores.textSecondary }}>
              R$ {ped.preco.toFixed(2).replace(".", ",")}
            </Text>
          </View>
        ))}
        <View style={styles.itemPedido}>
          <Text style={{ color: cores.textSecondary }}>Entrega</Text>
          <Text style={{ color: cores.textSecondary }}>
            {pedido.valorEntrega > 0
              ? `R$ ${pedido.valorEntrega.toFixed(2).replace(".", ",")}`
              : "-"}
          </Text>
        </View>
      </View>
      <View
        style={[styles.statusContainer, { borderTopColor: cores.inputBorder }]}
      >
        <Text style={{ color: cores.success }}>
          {pedido.valorEntrega > 0 ? "Pedido entregue" : "Pedido retirado"}
        </Text>
        <Text style={{ color: cores.success }}>
          R$ {pedido.valorTotal.toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 12,
    gap: 15,
  },
  tituloContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPedido: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingTop: 15,
  },
  tamanhoTxt: {
    fontSize: 16,
  },
});
