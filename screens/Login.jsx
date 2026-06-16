import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";
import { useContext, useState } from "react";
import ActionBtn from "../components/ActionBtn";
import AuthContext from "../contexts/AuthProvider";

export const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Login() {
  const authContext = useContext(AuthContext);
  const { usuario, msgErro, carregando, login } = authContext;
  const { cores } = useTema();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [inputErrado, setInputErrado] = useState({
    emailVazio: "",
    senhaVazio: "",
    emailInvalido: "",
  });

  function handleLogin() {
    const emailVazio = !email ? "Preencha o campo E-mail" : "";
    const senhaVazio = !senha ? "Preencha o campo Senha" : "";
    const emailInvalido =
      email && !regexEmail.test(email) ? "Digite um e-mail válido" : "";

    setInputErrado({
      emailVazio,
      senhaVazio,
      emailInvalido,
    });

    if (emailVazio || senhaVazio || emailInvalido) {
      return;
    }

    login(email, senha);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.screen, { backgroundColor: cores.background }]}>
        <View style={styles.container}>
          <View>
            <Text
              style={[
                styles.titulo,
                styles.txtSize,
                { color: cores.textPrimary },
              ]}
            >
              Bem-vindo(a)!
            </Text>
            <Text style={[styles.txtSize, { color: cores.textPrimary }]}>
              Entre com seu e-mail e senha
            </Text>
          </View>
          <View style={styles.inputsContainer}>
            <View>
              <Text
                style={[
                  styles.txt,
                  styles.txtSize,
                  { color: cores.textPrimary },
                ]}
              >
                E-mail
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { borderColor: cores.inputBorder, color: cores.textPrimary },
                ]}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              {inputErrado.emailVazio && (
                <Text style={[styles.msgErro, { color: cores.error }]}>
                  {inputErrado.emailVazio}
                </Text>
              )}
              {inputErrado.emailInvalido && (
                <Text style={[styles.msgErro, { color: cores.error }]}>
                  {inputErrado.emailInvalido}
                </Text>
              )}
            </View>
            <View>
              <Text
                style={[
                  styles.txt,
                  styles.txtSize,
                  { color: cores.textPrimary },
                ]}
              >
                Senha
              </Text>
              <View style={styles.mostrarSenhaContainer}>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor: cores.inputBorder,
                      color: cores.textPrimary,
                    },
                  ]}
                  value={senha}
                  onChangeText={setSenha}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={!mostrarSenha}
                />
                <Pressable
                  style={styles.botaoOlho}
                  onPress={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? (
                    <AntDesign
                      name="eye"
                      size={20}
                      color={cores.textSecondary}
                    />
                  ) : (
                    <AntDesign
                      name="eye-invisible"
                      size={20}
                      color={cores.textSecondary}
                    />
                  )}
                </Pressable>
              </View>
              {inputErrado.senhaVazio && (
                <Text style={[styles.msgErro, { color: cores.error }]}>
                  {inputErrado.senhaVazio}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.btnContainer}>
            {msgErro && (
              <Text style={{ color: cores.error, paddingLeft: 2 }}>
                {msgErro}
              </Text>
            )}
            <ActionBtn
              txt="Entrar"
              executar={handleLogin}
              carregando={carregando}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    paddingVertical: 65,
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    gap: 60,
  },
  inputsContainer: {
    gap: 25,
  },
  txtSize: {
    fontSize: 16,
  },
  titulo: {
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 2,
  },
  msgErro: {
    fontSize: 12,
    alignSelf: "flex-end",
    marginTop: 5,
  },
  mostrarSenhaContainer: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },
  botaoOlho: {
    position: "absolute",
    right: 10,
  },
  btnContainer: {
    gap: 8,
  },
});
