import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTema } from "../contexts/TemaContext";
import { useEndereco } from "../contexts/EnderecoContext";
import CardEnderecoCheckout from "./CardEnderecoCheckout";

export default function LocaisEntrega() {
  const { cores } = useTema();
  const { listaEnderecos } = useEndereco();
  const navigation = useNavigation();

  function moverParaCadastroEndereco() {
    navigation.navigate("Cadastrar endereço");
  }

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: cores.background,
          borderBottomColor: cores.inputBorder,
        },
      ]}
    >
      <View style={styles.cabecalho}>
        <Text style={[styles.titulo, { color: cores.textPrimary }]}>
          Local de Entrega
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            {
              borderColor: cores.primary,
              transform: [{ scale: pressed ? 0.96 : 1 }],
            },
          ]}
          onPress={moverParaCadastroEndereco}
        >
          <Text style={{ color: cores.primary }}>Novo endereço</Text>
        </Pressable>
      </View>
      <View style={{ gap: 15 }}>
        {listaEnderecos.length > 0 ? (
          listaEnderecos.map((item, index) => (
            <CardEnderecoCheckout key={index} endereco={item} index={index} />
          ))
        ) : (
          <Text style={[styles.mensagem, { color: cores.textPrimary }]}>
            Cadastre um endereço de entrega
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 15,
    paddingBottom: 25,
    borderBottomWidth: 1,
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  mensagem: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
