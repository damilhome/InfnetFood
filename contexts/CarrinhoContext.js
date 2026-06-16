import { createContext, useState, useContext } from "react";
import { Alert } from "react-native";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [listaProdutos, setListaProdutos] = useState([]);

  function adicionarProduto(novoProduto) {
    setListaProdutos((prevState) => [...prevState, novoProduto]);
    Alert.alert("Produto adicionado");
  }

  return (
    <CarrinhoContext.Provider value={{ listaProdutos, adicionarProduto }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
