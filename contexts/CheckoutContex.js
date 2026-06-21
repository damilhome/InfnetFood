import { createContext, useState, useContext } from "react";

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [enderecoSelecionado, setEnderecoSelecionado] = useState({});
  const [metodoSelecionado, setMetodoSelecionado] = useState({});

  return (
    <CheckoutContext.Provider
      value={{
        enderecoSelecionado,
        metodoSelecionado,
        setEnderecoSelecionado,
        setMetodoSelecionado,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  return useContext(CheckoutContext);
}
