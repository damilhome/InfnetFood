import { createContext, useEffect, useState } from "react";
import { logarUsuario } from "../services/autenticarFirebase";
import { Alert } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [msgErro, setMsgErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [carregamentoInicial, setCarregamentoInicial] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
      } else {
        setUsuario(null);
      }
      setCarregamentoInicial(false);
    });

    return () => unsubscribe();
  }, []);

  async function login(email, senha) {
    setCarregando(true);
    setMsgErro("");

    try {
      await logarUsuario(email, senha);
    } catch (error) {
      let mensagemErro = "Falha ao fazer login, por favor tente novamente.";

      switch (error.code) {
        case "auth/invalid-credential":
          mensagemErro = "E-mail ou senha incorreta.";
          break;
        case "auth/too-many-requests":
          mensagemErro =
            "Muitas tentativas falhas. Sua conta foi temporariamente bloqueada. Tente mais tarde.";
          break;
        case "auth/network-request-failed":
          mensagemErro =
            "Sem conexão com a internet. Verifique sua rede e tente novamente.";
          break;
      }

      setMsgErro(mensagemErro);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ usuario, msgErro, carregando, carregamentoInicial, login }}
    >
      {children}
    </AuthContext.Provider>
  );
}
