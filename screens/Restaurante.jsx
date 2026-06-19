import { StyleSheet, View, Text } from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function Restaurante() {
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        Restaurante
      </Text>
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
});
