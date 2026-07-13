import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
import { useTema } from "../contexts/TemaContext";
import { useListaPedidos } from "../contexts/PedidosContext";
import { Entypo } from "@expo/vector-icons";
import CardPedido from "../components/CardPedido";
import { useState } from "react";

export default function Pedidos() {
  const { cores } = useTema();
  const { listaPedidos, limparLista } = useListaPedidos();
  const [visivel, setVisivel] = useState(false);

  function limpar() {
    limparLista();
    setVisivel(!visivel);
  }

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <View style={{ position: "relative" }}>
        <Text style={[styles.titulo, { color: cores.textPrimary }]}>
          Pedidos
        </Text>
        {listaPedidos.length > 0 && (
          <Pressable style={styles.btn} onPress={() => setVisivel(!visivel)}>
            <Entypo
              name="dots-three-vertical"
              size={20}
              color={cores.textPrimary}
            />
          </Pressable>
        )}
      </View>
      <FlatList
        contentContainerStyle={styles.pedidosContainer}
        data={listaPedidos}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => <CardPedido pedido={item} />}
      />

      <Modal visible={visivel} transparent={true} animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setVisivel(!visivel)}
        >
          <View
            style={[
              styles.conteudoModal,
              {
                backgroundColor: cores.background,
                borderColor: cores.inputBorder,
              },
            ]}
          >
            <Pressable
              style={[styles.opcao, { borderBottomColor: cores.inputBorder }]}
              onPress={() => limpar()}
            >
              <Text style={{ color: cores.textPrimary, fontSize: 16 }}>
                Limpar histórico de pedidos
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 45,
  },
  titulo: {
    padding: 15,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  pedidosContainer: {
    gap: 5,
    paddingBottom: 15,
  },
  btn: {
    position: "absolute",
    right: 0,
    bottom: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
  },
  conteudoModal: {
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    maxHeight: 250,
    overflow: "hidden",
  },
  opcao: {
    padding: 15,
    borderBottomWidth: 1,
  },
});
