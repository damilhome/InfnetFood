import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTema } from "../contexts/TemaContext";
import { useEndereco } from "../contexts/EnderecoContext";
import CardMetodoPagamento from "./CardMetodoPagamento";

export default function FormaDePagamento() {
  const { cores } = useTema();
  const { listaEnderecos } = useEndereco();
  const navigation = useNavigation();

  const opcoesPagamento = [
    { id: "1", label: "Pix", value: "pix", iconName: "pix" },
    {
      id: "2",
      label: "Cartão de Crédito",
      value: "credito",
      iconName: "credit-card",
    },
    {
      id: "3",
      label: "Cartão de Débito",
      value: "debito",
      iconName: "credit-card",
    },
    {
      id: "4",
      label: "Dinheiro",
      value: "dinheiro",
      iconName: "money-bill",
    },
  ];

  return (
    <View style={[styles.card, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        Forma de Pagamento
      </Text>

      <View style={{ gap: 15 }}>
        {opcoesPagamento.map((item) => (
          <CardMetodoPagamento key={item.id} metodo={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 15,
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  mensagem: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
