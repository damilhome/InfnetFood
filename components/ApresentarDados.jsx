import { StyleSheet, Text, View } from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function ApresentarDados({ label, txt }) {
  const { cores } = useTema();

  return (
    <View style={styles.info}>
      <Text
        style={[styles.label, styles.tamanhoTxt, { color: cores.textPrimary }]}
      >
        {label}
      </Text>
      <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
        {txt}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  label: {
    fontWeight: "bold",
  },
  tamanhoTxt: {
    fontSize: 16,
  },
});
