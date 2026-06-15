import { StyleSheet, Text, View } from "react-native";
import ActionBtn from "../components/ActionBtn/ActionBtn";
import { deslogarUsuario } from "../services/autenticarFirebase";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Home
        <ActionBtn txt="Log out" executar={deslogarUsuario} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
