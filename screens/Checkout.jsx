import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTema } from "../contexts/TemaContext";
import { useListaPedidos } from "../contexts/PedidosContext";
import { useCarrinho } from "../contexts/CarrinhoContext";
import ValorPedidoCheckout from "../components/ValorPedidoCheckout";
import LocaisEntrega from "../components/LocaisEntrega";
import FormaDePagamento from "../components/FormaDePagamento";
import ActionBtn from "../components/ActionBtn";
import DisabledActionBtn from "../components/DisabledActionBtn";
import { useCheckout } from "../contexts/CheckoutContex";

export default function Checkout() {
  const { enderecoSelecionado, metodoSelecionado } = useCheckout();
  const { cores } = useTema();
  const { adicionarPedido } = useListaPedidos();
  const { adicionarProduto, realizarCompra } = useCarrinho();
  const route = useRoute();
  const { compraAtual } = route.params;
  const navigation = useNavigation();

  function calcularTotal() {
    let total = 0;
    listaProdutos.forEach((produto) => {
      total = total + produto.preco * produto.quantidade;
    });
    return total;
  }

  function handleRealizarCompra() {
    const compraAtualAtualizada = {
      ...compraAtual,
      localEntrega: enderecoSelecionado[Object.keys(enderecoSelecionado)[0]],
      formaPagamento: metodoSelecionado[Object.keys(metodoSelecionado)[0]],
    };
    adicionarPedido(compraAtualAtualizada);
    realizarCompra();
    navigation.goBack();
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: cores.background }]}
      contentContainerStyle={styles.containerStyles}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.secao}>
        <Text style={[styles.titulo, { color: cores.textPrimary }]}>Valor</Text>
        <ValorPedidoCheckout
          subtotal={compraAtual.subtotal}
          taxaEntrega={compraAtual.taxaEntrega}
        />
      </View>
      <LocaisEntrega />
      <FormaDePagamento />
      {Object.keys(enderecoSelecionado).length === 0 ||
      Object.keys(metodoSelecionado).length === 0 ? (
        <DisabledActionBtn txt="Escolha um endereço e forma de pagamento" />
      ) : (
        <ActionBtn
          txt="Realizar compra"
          executar={handleRealizarCompra}
          carregando={false}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  containerStyles: {
    gap: 25,
    paddingBottom: 50,
  },
  secao: {
    gap: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

/* function calcularTotal() {
    let total = 0;
    listaProdutos.forEach((produto) => {
      total = total + produto.preco * produto.quantidade;
    });
    return total;
  }

  function handleRealizarCompra() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString();
    const data = agora.toLocaleDateString();
    const foiEntrega = entrega;
    const compraAtual = {
      produtos: listaProdutos,
      hora,
      data,
      valorEntrega: taxaEntrega,
      valorTotal: calcularTotal() + taxaEntrega,
    };
    adicionarPedido(compraAtual);
    realizarCompra();
  } */
