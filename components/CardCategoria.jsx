import { StyleSheet, Text, Pressable, Image } from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function CardCategoria({ categoria }) {
  const { cores } = useTema();
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { transform: [{ scale: pressed ? 0.96 : 1 }] },
      ]}
    >
      <Image source={{ uri: categoria.imagem }} style={styles.imagem} />
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        {categoria.nome}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 5,
    alignItems: "center",
  },
  imagem: {
    width: "100%",
    height: 100,
    borderRadius: 30,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
