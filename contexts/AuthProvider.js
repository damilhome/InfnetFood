import { createContext, useEffect, useState } from "react";
import { logarUsuario } from "../services/autenticarFirebase";
import { Alert } from "react-native";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [msgErro, setMsgErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function login(email, senha) {
    setCarregando(true);
    setMsgErro("");

    try {
      const user = await logarUsuario(email, senha);
      setUsuario(user);
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
    <AuthContext.Provider value={{ usuario, msgErro, carregando, login }}>
      {children}
    </AuthContext.Provider>
  );
}
