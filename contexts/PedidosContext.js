import { createContext, useState, useContext, useEffect } from "react";
import { Alert } from "react-native";
import {
  recuperarDados,
  removerDados,
  salvarDados,
} from "../utils/asyncStorage";

const PedidosContext = createContext();
const CHAVE_STORAGE = "ListPedidos";

export function PedidosProvider({ children }) {
  const [listaPedidos, setListaPedidos] = useState([]);

  async function salvarListaStorage(novaLista) {
    try {
      await salvarDados(novaLista, CHAVE_STORAGE);
    } catch (error) {
      console.error(
        "Erro, produto adicionado ou alterado no estado mas não salvo no storage!",
        error,
      );
    }
  }

  function adicionarPedido(novoPedido) {
    const novaLista = [novoPedido, ...listaPedidos];
    setListaPedidos(novaLista);
    salvarListaStorage(novaLista);
    Alert.alert("Compra realizada!");
  }

  useEffect(() => {
    async function carregarPedidos() {
      try {
        const dadosPedidos = await recuperarDados(CHAVE_STORAGE);
        if (dadosPedidos !== null) {
          setListaPedidos(dadosPedidos);
        }
      } catch (error) {
        console.error("Erro ao recuperar o carrinho: ", error);
      }
    }

    carregarPedidos();
  }, []);

  return (
    <PedidosContext.Provider
      value={{
        listaPedidos,
        adicionarPedido,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
}

export function useListaPedidos() {
  return useContext(PedidosContext);
}
