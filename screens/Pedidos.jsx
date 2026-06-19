import { StyleSheet, Text, View, FlatList } from "react-native";
import { useTema } from "../contexts/TemaContext";
import { useListaPedidos } from "../contexts/PedidosContext";
import CardPedido from "../components/CardPedido";

export default function Pedidos() {
  const { cores } = useTema();
  const { listaPedidos, limparLista } = useListaPedidos();

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>Pedidos</Text>
      <FlatList
        contentContainerStyle={styles.pedidosContainer}
        data={listaPedidos}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => <CardPedido pedido={item} />}
      />
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
  pedidosContainer: {
    gap: 5,
    paddingBottom: 15,
  },
});
