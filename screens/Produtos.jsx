import { StyleSheet, Text, View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useProdutos } from "../contexts/ProdutosContext";
import { useTema } from "../contexts/TemaContext";
import CardProduto from "../components/CardProduto";

export default function Produtos() {
  const route = useRoute();
  const { categoriaId, nomeCategoria } = route.params;
  const { produtos } = useProdutos();
  const { cores } = useTema();

  const produtosFiltrados = produtos.filter((produto) => {
    if (produto.categoriaId == categoriaId) {
      return produto;
    }
  });

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        {nomeCategoria}
      </Text>
      <FlatList
        style={styles.produtosContainer}
        contentContainerStyle={styles.produtos}
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProduto produto={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  titulo: {
    padding: 15,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  produtosContainer: {
    alignSelf: "flex-start",
    width: "100%",
  },
  produtos: {
    paddingBottom: 15,
  },
});
