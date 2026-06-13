import { StyleSheet, Text, View, TextInput } from "react-native";
import { useTema } from "../contexts/TemaContext";
import { useState } from "react";

export default function Login() {
  const { cores } = useTema();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={[styles.screen, { backgroundColor: cores.background }]}>
      <View style={[styles.container, {}]}>
        <Text style={styles.paragraph}>Login</Text>
        <View>
          <View>
            <Text>E-mail</Text>
            <TextInput value={email} onChangeText={setEmail} />
          </View>
          <View>
            <Text>Senha</Text>
            <TextInput value={senha} onChangeText={setSenha} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  container: {},
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
