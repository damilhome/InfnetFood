import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";
import { useNavigation } from "@react-navigation/native";

export default function ConfigBtn({ iconName, txt, navigateTo }) {
  const { cores } = useTema();
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { borderBottomColor: cores.inputBorder },
        { transform: [{ scale: pressed ? 0.96 : 1 }] },
      ]}
      onPress={() => navigation.navigate(navigateTo)}
    >
      <View style={styles.nomeCard}>
        <Ionicons name={iconName} size={16} color={cores.textPrimary} />
        <Text style={[styles.nome, { color: cores.textPrimary }]}>{txt}</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color={cores.textPrimary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  nomeCard: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  nome: {
    fontSize: 16,
  },
});
