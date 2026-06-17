import { StyleSheet, Text, View } from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function ApresentarDados({ titulo }) {
  const { cores } = useTema();

  return (
    <Text style={[styles.tituloSecao, { color: cores.textPrimary }]}>
      {titulo}
    </Text>
  );
}

const styles = StyleSheet.create({
  tituloSecao: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
