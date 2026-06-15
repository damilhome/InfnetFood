import { StyleSheet, Text, Pressable } from "react-native";
import { useTema } from "../../contexts/TemaContext";

export default function ActionBtn({ txt, executar }) {
  const { cores } = useTema();

  return (
    <Pressable
      style={[styles.btn, { backgroundColor: cores.primary }]}
      onPress={executar}
    >
      <Text style={[styles.txt, { color: cores.textPrimary }]}>{txt}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  txt: {
    fontSize: 16,
    fontWeight: "500",
  },
});
