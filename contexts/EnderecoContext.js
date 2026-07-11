import { createContext, useState, useContext, useEffect } from "react";
import { Alert } from "react-native";
import {
  recuperarDados,
  removerDados,
  salvarDados,
} from "../utils/asyncStorage";

const EnderecoContext = createContext();
const CHAVE_STORAGE = "ListaEnderecos";

export default function EnderecoProvider({ children }) {
  const [listaEnderecos, setListaEnderecos] = useState([]);

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

  function formatarEndereco(logradouro, numero, bairro, cidade, estado) {
    return `${logradouro}, ${numero} - ${bairro}, ${cidade} - ${estado}`;
  }

  function removerEndereco(itemIndex) {
    const novaLista = listaEnderecos.filter((item, index) => {
      if (index !== itemIndex) {
        return item;
      }
    });
    setListaEnderecos(novaLista);
    salvarListaStorage(novaLista);
  }

  function criarNovoEndereco(
    estado,
    cidade,
    logradouro,
    numero,
    bairro,
    complemento,
    pontoReferencia,
    apelido,
  ) {
    const novoEndereco = {
      apelido,
      logradouro,
      numero,
      bairro,
      cidade,
      estado,
      complemento,
      pontoReferencia,
    };
    const novaLista = [...listaEnderecos, novoEndereco];
    setListaEnderecos(novaLista);
    salvarListaStorage(novaLista);
  }

  useEffect(() => {
    async function carregarPedidos() {
      try {
        const dadosPedidos = await recuperarDados(CHAVE_STORAGE);
        if (dadosPedidos !== null) {
          setListaEnderecos(dadosPedidos);
        }
      } catch (error) {
        console.error("Erro ao recuperar os endereços: ", error);
      }
    }

    carregarPedidos();
  }, []);

  return (
    <EnderecoContext.Provider
      value={{
        listaEnderecos,
        criarNovoEndereco,
        formatarEndereco,
        removerEndereco,
      }}
    >
      {children}
    </EnderecoContext.Provider>
  );
}

export function useEndereco() {
  return useContext(EnderecoContext);
}
