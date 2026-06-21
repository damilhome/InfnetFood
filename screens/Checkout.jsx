import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
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
  const { compraAtual, entrega } = route.params;
  const navigation = useNavigation();

  const faltaEndereco =
    entrega &&
    (!enderecoSelecionado || Object.keys(enderecoSelecionado).length === 0);
  const faltaMetodo =
    !metodoSelecionado || Object.keys(metodoSelecionado).length === 0;

  const bloquearBtn = faltaEndereco || faltaMetodo;

  function handleRealizarCompra() {
    const compraAtualAtualizada = {
      ...compraAtual,
      localEntrega: entrega
        ? enderecoSelecionado[Object.keys(enderecoSelecionado)[0]]
        : null,
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
      {entrega && <LocaisEntrega />}
      <FormaDePagamento />
      {bloquearBtn ? (
        <DisabledActionBtn
          txt={
            entrega
              ? "Escolha um endereço e forma de pagamento"
              : "Escolha uma forma de pagamento"
          }
        />
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
