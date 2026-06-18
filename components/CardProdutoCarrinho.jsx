import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";
import { useCarrinho } from "../contexts/CarrinhoContext";

export default function CardProdutoCarrinho({ produto, index }) {
  const { cores } = useTema();
  const { aumentarQuantidade, diminuirQuantidade, removerProdutoLista } =
    useCarrinho();

  function calcularPreco(preco, quantidade) {
    const novoPreco = preco * quantidade;
    return novoPreco.toFixed(2).replace(".", ",");
  }

  return (
    <View style={[styles.card, { borderBottomColor: cores.inputBorder }]}>
      <View style={styles.nomeContainer}>
        <Text
          style={[
            styles.tamanhoTxt,
            styles.titulo,
            { color: cores.textPrimary },
          ]}
        >
          {produto.nome}
        </Text>
        <View style={styles.indicadorQuantidade}>
          {produto.quantidade === 1 ? (
            <Pressable onPress={() => removerProdutoLista(index)}>
              <Ionicons name="trash-outline" size={20} color={cores.primary} />
            </Pressable>
          ) : (
            <Pressable onPress={() => diminuirQuantidade(produto.id)}>
              <AntDesign name="minus" size={20} color={cores.primary} />
            </Pressable>
          )}
          <Text style={{ color: cores.textPrimary, fontSize: 16 }}>
            {produto.quantidade}
          </Text>
          <Pressable onPress={() => aumentarQuantidade(produto.id)}>
            <AntDesign name="plus" size={20} color={cores.primary} />
          </Pressable>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
          Total
        </Text>
        <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
          R$ {calcularPreco(produto.preco, produto.quantidade)}
        </Text>
      </View>
      {produto.observacao && (
        <View>
          <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
            Observação
          </Text>
          <Text style={[styles.observacao, { color: cores.textSecondary }]}>
            {produto.observacao}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    gap: 15,
  },
  nomeContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  titulo: {
    fontWeight: "bold",
  },
  tamanhoTxt: {
    fontSize: 16,
  },
  indicadorQuantidade: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  observacao: {
    paddingLeft: 15,
  },
});
