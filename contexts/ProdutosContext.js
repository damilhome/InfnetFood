import { createContext, useState, useContext } from "react";
import { categorias, produtos } from "../data/categorias";

const ProdutosContext = createContext();

export function ProdutosProvider({ children }) {
  return (
    <ProdutosContext.Provider value={{ categorias, produtos }}>
      {children}
    </ProdutosContext.Provider>
  );
}

export function useProdutos() {
  return useContext(ProdutosContext);
}
