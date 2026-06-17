import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function ActionBtn({ txt, executar, carregando }) {
  const { cores } = useTema();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        { backgroundColor: pressed ? cores.primaryActive : cores.primary },
      ]}
      onPress={executar}
    >
      {carregando ? (
        <ActivityIndicator size="small" color={cores.textPrimary} />
      ) : (
        <Text style={[styles.txt, { color: cores.textPrimary }]}>{txt}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  txt: {
    fontSize: 15,
    fontWeight: "500",
  },
});
