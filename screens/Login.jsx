import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useTema } from "../contexts/TemaContext";
import { useState } from "react";
import ActionBtn from "../components/ActionBtn/ActionBtn";

export default function Login() {
  const { cores } = useTema();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
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
              style={[styles.txt, styles.txtSize, { color: cores.textPrimary }]}
            >
              E-mail
            </Text>
            <TextInput
              style={[styles.input, { borderColor: cores.inputBorder }]}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text
              style={[styles.txt, styles.txtSize, { color: cores.textPrimary }]}
            >
              Senha
            </Text>
            <TextInput
              style={[styles.input, { borderColor: cores.inputBorder }]}
              value={senha}
              onChangeText={setSenha}
            />
          </View>
        </View>

        <ActionBtn txt="Entrar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
