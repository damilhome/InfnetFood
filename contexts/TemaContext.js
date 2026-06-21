import { createContext, useState, useEffect, useContext } from "react";
import { temaClaro, temaEscuro } from "../data/temas";
import {
  recuperarDados,
  removerDados,
  salvarDados,
} from "../utils/asyncStorage";

const TemaContext = createContext();
const CHAVE_STORAGE = "ModoEscuro";

export function TemaProvider({ children }) {
  const [modoEscuro, setModoEscuro] = useState(true);

  async function salvarListaStorage(tema) {
    try {
      await salvarDados(tema, CHAVE_STORAGE);
    } catch (error) {
      console.error("Erro, tema alterado mas não salvo no storage!", error);
    }
  }

  function alterarTema() {
    const novoTema = !modoEscuro;
    setModoEscuro(novoTema);
    salvarListaStorage(novoTema);
  }

  const cores = modoEscuro ? temaEscuro : temaClaro;

  useEffect(() => {
    async function carregarTema() {
      try {
        const temaEscuro = await recuperarDados(CHAVE_STORAGE);
        if (temaEscuro !== null) {
          setModoEscuro(temaEscuro);
        }
      } catch (error) {
        console.error("Erro ao recuperar o tema: ", error);
      }
    }

    carregarTema();
  }, []);

  return (
    <TemaContext.Provider value={{ cores, modoEscuro, alterarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}
