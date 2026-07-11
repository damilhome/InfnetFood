import { StyleSheet, View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";
import { useCheckout } from "../contexts/CheckoutContex";
import { useEndereco } from "../contexts/EnderecoContext";

export default function CardEnderecoCheckout({ endereco, index }) {
  const { cores } = useTema();
  const { enderecoSelecionado, setEnderecoSelecionado } = useCheckout();
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
      <Pressable
        style={[
          styles.check,
          {
            backgroundColor: enderecoSelecionado[index]
              ? cores.primary
              : cores.textSecondary,
          },
        ]}
        onPress={() => setEnderecoSelecionado({ [index]: true })}
      >
        {enderecoSelecionado[index] && (
          <AntDesign name="check" size={12} color={cores.textPrimary} />
        )}
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
