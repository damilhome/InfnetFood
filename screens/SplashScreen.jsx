import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function SplashScreen() {
  const { cores } = useTema();
  return (
    <View style={[styles.screen, { backgroundColor: cores.primary }]}>
      <Text style={[styles.txt, { color: cores.textPrimary }]}>InfnetFood</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
