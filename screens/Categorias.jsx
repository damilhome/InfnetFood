import { StyleSheet, Text, View, FlatList } from "react-native";
import { useTema } from "../contexts/TemaContext";
import { useProdutos } from "../contexts/ProdutosContext";
import CardCategoria from "../components/CardCategoria";

export default function Categorias() {
  const { cores } = useTema();
  const { categorias } = useProdutos();

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        Categorias
      </Text>
      <FlatList
        contentContainerStyle={styles.catContainer}
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardCategoria categoria={item} />}
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
  catContainer: {
    gap: 15,
    paddingBottom: 15,
  },
});
