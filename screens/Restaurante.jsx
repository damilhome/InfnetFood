import { StyleSheet, View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useTema } from "../contexts/TemaContext";

export default function Restaurante() {
  const route = useRoute();
  const { restaurante } = route.params;
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <View style={styles.secao}>
        <Text style={[styles.titulo, { color: cores.textPrimary }]}>
          {restaurante.nome}
        </Text>
        <Text style={[styles.tamanhoTxt, { color: cores.textSecondary }]}>
          {restaurante.descricao}
        </Text>
      </View>
      <View style={styles.secaoCardapio}>
        <Text style={[styles.titulo, { color: cores.textPrimary }]}>
          Nosso prato principal
        </Text>
        <View style={styles.pratoContainer}>
          <Image
            source={{ uri: restaurante.itemDestaque.foto }}
            style={styles.pratoFoto}
          />
          <Text style={[styles.pratoNome, { color: cores.textPrimary }]}>
            {restaurante.itemDestaque.nome}
          </Text>
          <Text style={[styles.tamanhoTxt, { color: cores.textSecondary }]}>
            {restaurante.itemDestaque.descricao}
          </Text>
        </View>
      </View>
      <View style={styles.secao}>
        <Text style={[styles.titulo, { color: cores.textPrimary }]}>
          Venha nos conhecer
        </Text>
        <Text style={[styles.tamanhoTxt, { color: cores.textSecondary }]}>
          {restaurante.endereco}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    gap: 25,
  },
  secao: {
    gap: 5,
  },
  secaoCardapio: {
    gap: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tamanhoTxt: {
    fontSize: 16,
  },
  pratoContainer: {
    gap: 8,
  },
  pratoFoto: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  pratoNome: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 5,
  },
});
