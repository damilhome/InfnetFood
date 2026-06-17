import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";
import { useCarrinho } from "../contexts/CarrinhoContext";
import CardProdutoCarrinho from "../components/CardProdutoCarrinho";
import { useState } from "react";
import ActionBtn from "../components/ActionBtn";

export default function Carrinho() {
  const { listaProdutos, adicionarProduto, taxaEntrega, setTaxaEntrega } =
    useCarrinho();
  const { cores } = useTema();
  const [entrega, setEntrega] = useState(true);

  function marcacaoEntrega(formaEntrega) {
    if (formaEntrega === "entrega") {
      setEntrega(true);
      setTaxaEntrega(7);
    } else if (formaEntrega === "retirada") {
      setEntrega(false);
      setTaxaEntrega(0);
    }
  }

  function calcularTotal() {
    let total = 0;
    listaProdutos.forEach((produto) => {
      total = total + produto.preco * produto.quantidade;
    });
    return total;
  }

  function handleRealizarCompra() {
    Alert.alert("Compra realizada!");
  }

  return listaProdutos.length >= 1 ? (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        Produtos
      </Text>
      <ScrollView contentContainerStyle={styles.containerListaProdutos}>
        <View>
          {listaProdutos.map((prod, index) => (
            <CardProdutoCarrinho key={index} produto={prod} index={index} />
          ))}
        </View>
        <View
          style={[
            styles.containerTotal,
            { borderBottomColor: cores.inputBorder },
          ]}
        >
          <View style={styles.infosContainer}>
            <View style={styles.subInfos}>
              <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
                Subtotal
              </Text>
              <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
                Taxa de entrega
              </Text>
            </View>
            <Text
              style={[
                styles.tamanhoTxt,
                styles.bold,
                { color: cores.textPrimary },
              ]}
            >
              Total
            </Text>
          </View>
          <View style={styles.infosContainer}>
            <View style={styles.subInfos}>
              <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
                R$ {calcularTotal().toFixed(2).replace(".", ",")}
              </Text>
              <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
                R$ {taxaEntrega.toFixed(2).replace(".", ",")}
              </Text>
            </View>
            <Text
              style={[
                styles.tamanhoTxt,
                styles.bold,
                { color: cores.textPrimary },
              ]}
            >
              R$ {(calcularTotal() + taxaEntrega).toFixed(2).replace(".", ",")}
            </Text>
          </View>
        </View>
        <View style={styles.entregaContainer}>
          <Text
            style={[
              styles.tamanhoTxt,
              styles.bold,
              { color: cores.textPrimary },
            ]}
          >
            Entrega ou retirar no local?
          </Text>
          <View style={styles.entrega}>
            <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
              Entrega
            </Text>
            <Pressable
              style={[
                styles.check,
                {
                  backgroundColor: entrega
                    ? cores.primary
                    : cores.textSecondary,
                },
              ]}
              onPress={() => marcacaoEntrega("entrega")}
            >
              {entrega && (
                <AntDesign name="check" size={12} color={cores.textPrimary} />
              )}
            </Pressable>
          </View>
          <View style={styles.entrega}>
            <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
              Retirar no local
            </Text>
            <Pressable
              style={[
                styles.check,
                {
                  backgroundColor: !entrega
                    ? cores.primary
                    : cores.textSecondary,
                },
              ]}
              onPress={() => marcacaoEntrega("retirada")}
            >
              {!entrega && (
                <AntDesign name="check" size={12} color={cores.textPrimary} />
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <ActionBtn
          txt="Realizar compra"
          executar={handleRealizarCompra}
          carregando={false}
        />
      </View>
    </View>
  ) : (
    <View
      style={[styles.containerVazio, { backgroundColor: cores.background }]}
    >
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        Carrinho vazio!
      </Text>
      <Text
        style={[
          styles.tamanhoTxt,
          { color: cores.textPrimary, textAlign: "center" },
        ]}
      >
        Os produtos que você adicionar ao carrinho aparecerão aqui!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 45,
  },
  containerVazio: {
    flex: 1,
    paddingHorizontal: 45,
    paddingTop: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    padding: 15,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerListaProdutos: {
    gap: 15,
    paddingBottom: 15,
  },
  containerTotal: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 50,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  infosContainer: {
    alignItems: "flex-end",
    gap: 15,
  },
  subInfos: {
    alignItems: "flex-end",
    gap: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  tamanhoTxt: {
    fontSize: 16,
  },
  entregaContainer: {
    gap: 20,
  },
  entrega: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  btn: {
    paddingVertical: 10,
  },
});
