import { StyleSheet, View, Text, Pressable } from "react-native";
import { useTema } from "../contexts/TemaContext";
import { useEndereco } from "../contexts/EnderecoContext";
import { Entypo } from "@expo/vector-icons";

export default function CardEndereco({ endereco, index, setVisivel }) {
  const { cores } = useTema();
  const { formatarEndereco } = useEndereco();

  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.apelido, { color: cores.textPrimary }]}>
          {endereco.apelido}
        </Text>
        <Text style={{ color: cores.textSecondary }}>
          {formatarEndereco(
            endereco.logradouro,
            endereco.numero,
            endereco.bairro,
            endereco.cidade,
            endereco.estado,
          )}
        </Text>
        <Text style={{ color: cores.textSecondary }}>
          Complemento: {endereco.complemento}
        </Text>
        <Text style={{ color: cores.textSecondary }}>
          Ponto de referência: {endereco.pontoReferencia}
        </Text>
      </View>
      <Pressable onPress={() => setVisivel({ visivel: true, index: index })}>
        <Entypo
          name="dots-three-vertical"
          size={20}
          color={cores.textPrimary}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  apelido: {
    fontWeight: "bold",
    fontSize: 18,
  },
  check: {
    width: 25,
    height: 25,
    backgroundColor: "red",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 1,
    paddingLeft: 2,
  },
});
