import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { useEndereco } from "../contexts/EnderecoContext";
import { useTema } from "../contexts/TemaContext";
import CardEndereco from "../components/CardEndereco";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ActionBtn from "../components/ActionBtn";

export default function Enderecos() {
  const { cores } = useTema();
  const { listaEnderecos, removerEndereco } = useEndereco();
  const [visivel, setVisivel] = useState({ visivel: false, index: null });
  const navigation = useNavigation();

  function lidarRemoverEndereco() {
    removerEndereco(visivel.index);
    setVisivel({ visivel: false, index: null });
  }

  function lidarEditarEndereco() {
    navigation.navigate("Editar Endereço", { index: visivel.index });
    setVisivel({ visivel: false, index: null });
  }

  function lidarCadastrarEndereco() {
    navigation.navigate("Cadastrar endereço");
  }

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <ScrollView contentContainerStyle={{ gap: 20 }}>
        {listaEnderecos.length > 0 ? (
          listaEnderecos.map((item, index) => (
            <CardEndereco
              key={index}
              endereco={item}
              index={index}
              setVisivel={setVisivel}
            />
          ))
        ) : (
          <Text style={[styles.mensagem, { color: cores.textPrimary }]}>
            Cadastre um endereço de entrega
          </Text>
        )}
      </ScrollView>
      <ActionBtn txt="Cadastrar endereço" executar={lidarCadastrarEndereco} />

      <Modal visible={visivel.visivel} transparent={true}>
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setVisivel({ visivel: false, index: null })}
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
              onPress={lidarEditarEndereco}
            >
              <Text style={{ color: cores.textPrimary, fontSize: 16 }}>
                Editar endereço
              </Text>
            </Pressable>
            <Pressable
              style={[styles.opcao, { borderBottomColor: cores.inputBorder }]}
              onPress={lidarRemoverEndereco}
            >
              <Text style={{ color: cores.textPrimary, fontSize: 16 }}>
                Excluir endereço
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
    padding: 15,
    paddingBottom: 25,
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
