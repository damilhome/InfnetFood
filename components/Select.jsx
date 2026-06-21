import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";
import { useState } from "react";

export default function Select({
  opcoes,
  valor,
  setValor,
  campo,
  erroSelecao,
  resolverErroSelecao,
}) {
  const { cores } = useTema();
  const [visivel, setVisivel] = useState(false);

  function lidarComSelecao(item) {
    let selecao = {};
    if (campo === "estado") {
      selecao = { nome: item.nome, uf: item.sigla, selecionado: true };
      resolverErroSelecao((prevState) => ({ ...prevState, erroEstado: false }));
    } else {
      selecao = { nome: item.nome, selecionado: true };
      resolverErroSelecao((prevState) => ({ ...prevState, erroCidade: false }));
    }
    setValor(selecao);
    setVisivel(false);
  }

  return (
    <View>
      <Pressable
        style={[
          styles.botaoSelect,
          {
            backgroundColor: cores.inputBackground,
            borderColor: erroSelecao ? cores.error : cores.inputBorder,
          },
        ]}
        onPress={() => setVisivel(true)}
      >
        <Text style={{ color: erroSelecao ? cores.error : cores.textPrimary }}>
          {valor.nome}
        </Text>
        <AntDesign
          name="down"
          size={16}
          color={erroSelecao ? cores.error : cores.textPrimary}
        />
      </Pressable>

      <Modal visible={visivel} transparent={true} animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setVisivel(false)}
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
            <FlatList
              data={opcoes}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  style={[
                    styles.opcao,
                    { borderBottomColor: cores.inputBorder },
                  ]}
                  onPress={() => lidarComSelecao(item)}
                >
                  <Text style={{ color: cores.textPrimary, fontSize: 16 }}>
                    {item.nome}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  botaoSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
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
