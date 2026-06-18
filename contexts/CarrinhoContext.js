import { createContext, useState, useContext, useEffect } from "react";
import { Alert } from "react-native";
import {
  recuperarDados,
  removerDados,
  salvarDados,
} from "../utils/asyncStorage";

const CarrinhoContext = createContext();
const CHAVE_STORAGE = "carrinhoDeProdutos";

export function CarrinhoProvider({ children }) {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [taxaEntrega, setTaxaEntrega] = useState(7);

  async function salvarListaStorage(novaLista, mostrarAlert = true) {
    try {
      await salvarDados(novaLista, CHAVE_STORAGE);

      if (mostrarAlert) {
        Alert.alert("Sucesso", "Produto adicionado ao carrinho!");
      }
    } catch (error) {
      Alert.alert(
        "Erro",
        "Produto adicionado ou alterado no estado mas não salvo no storage!",
      );
    }
  }

  function adicionarProduto(novoProduto) {
    const novaLista = [...listaProdutos, novoProduto];
    setListaProdutos(novaLista);
    salvarListaStorage(novaLista);
  }

  async function removerProdutoLista(index) {
    if (listaProdutos.length === 1) {
      await removerDados(CHAVE_STORAGE);
      setListaProdutos([]);
    } else {
      const novaLista = [
        ...listaProdutos.slice(0, index),
        ...listaProdutos.slice(index + 1),
      ];
      setListaProdutos(novaLista);
      salvarListaStorage(novaLista, false);
    }
  }

  async function realizarCompra() {
    setListaProdutos([]);
    await removerDados(CHAVE_STORAGE);
  }

  function aumentarQuantidade(id) {
    const novaLista = listaProdutos.map((produto) => {
      if (produto.id === id) {
        const novoProduto = { ...produto, quantidade: produto.quantidade + 1 };
        return novoProduto;
      }
      return produto;
    });
    setListaProdutos(novaLista);
    salvarListaStorage(novaLista, false);
  }

  function diminuirQuantidade(id) {
    const novaLista = listaProdutos.map((produto) => {
      if (produto.id === id) {
        const novaQuantidade =
          produto.quantidade === 1 ? 1 : produto.quantidade - 1;
        const novoProduto = { ...produto, quantidade: novaQuantidade };
        return novoProduto;
      }
      return produto;
    });
    setListaProdutos(novaLista);
    salvarListaStorage(novaLista, false);
  }

  useEffect(() => {
    async function carregarCarrinho() {
      try {
        const dadosProdutos = await recuperarDados(CHAVE_STORAGE);
        if (dadosProdutos !== null) {
          setListaProdutos(dadosProdutos);
        }
      } catch (error) {
        console.error("Erro ao recuperar o carrinho: ", error);
      }
    }

    carregarCarrinho();
  }, []);

  return (
    <CarrinhoContext.Provider
      value={{
        listaProdutos,
        taxaEntrega,
        setTaxaEntrega,
        adicionarProduto,
        aumentarQuantidade,
        diminuirQuantidade,
        removerProdutoLista,
        realizarCompra,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
