import { StyleSheet, View, Text, Image } from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function ResumoPerfil({ nome, email }) {
  const { cores } = useTema();

  return (
    <View style={styles.card}>
      <Image
        source={require("../data/perfil/foto_perfil.jpg")}
        style={styles.imagemPerfil}
      />
      <View>
        <Text style={[styles.nome, { color: cores.textPrimary }]}>{nome}</Text>
        <Text style={[styles.titulo, { color: cores.textSecondary }]}>
          {email}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 15,
  },
  imagemPerfil: {
    width: 60,
    height: 60,
    borderRadius: 150,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
