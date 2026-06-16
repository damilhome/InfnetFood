import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";
import { useState, useEffect, useRef } from "react";
import ActionBtn from "../components/ActionBtn";

export default function DetalhesProduto() {
  const route = useRoute();
  const { produto } = route.params;
  const { cores } = useTema();
  const [observacao, setObservacao] = useState();
  const [mostrarPadding, setMostrarPadding] = useState(false);
  const [quantidade, setQuantidade] = useState(1);
  const scrollViewRef = useRef(null);

  function adicionarCarrinho() {}

  useEffect(() => {
    let timerId;
    const adicionarPadding = Keyboard.addListener("keyboardDidShow", () => {
      setMostrarPadding(true);
      timerId = setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 60);
    });
    const removerPadding = Keyboard.addListener("keyboardDidHide", () => {
      setMostrarPadding(false);
    });

    return () => {
      adicionarPadding.remove();
      removerPadding.remove();
      clearTimeout(timerId);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: cores.background,
            paddingBottom: mostrarPadding ? 360 : 25,
          },
        ]}
      >
        <ScrollView ref={scrollViewRef} keyboardShouldPersistTaps="handled">
          <Image source={{ uri: produto.imagem }} style={styles.imagem} />
          <View style={styles.produtoContainer}>
            <View style={styles.descritivo}>
              <Text style={[styles.titulo, { color: cores.textPrimary }]}>
                {produto.nome} - {produto.tamanho}
              </Text>
              <Text style={[styles.descricao, { color: cores.textSecondary }]}>
                {produto.descricao}
              </Text>
            </View>
            <View style={styles.descritivo}>
              <Text style={[styles.titulo, { color: cores.textPrimary }]}>
                Ingradientes
              </Text>
              <Text style={{ color: cores.textSecondary, fontSize: 16 }}>
                {produto.ingredientes.join(", ")}
              </Text>
            </View>
            <View style={styles.descritivo}>
              <Text style={[styles.titulo, { color: cores.textPrimary }]}>
                Detalhes
              </Text>
              <View style={styles.icone}>
                <MaterialIcons
                  name="timer"
                  size={15}
                  color={cores.textPrimary}
                />
                <Text style={{ color: cores.textSecondary, fontSize: 16 }}>
                  {produto.tempoEntrega}
                </Text>
                <Entypo name="dot-single" size={12} color={cores.textPrimary} />
                <Text style={{ color: cores.textSecondary, fontSize: 16 }}>
                  Avaliação: {produto.avaliacao}
                </Text>
                <MaterialIcons name="star" size={15} color="yellow" />
              </View>
            </View>
            <View style={styles.descritivo}>
              <View style={styles.icone}>
                <MaterialIcons
                  name="comment"
                  size={15}
                  color={cores.textPrimary}
                />
                <Text style={[styles.titulo, { color: cores.textPrimary }]}>
                  Observações
                </Text>
              </View>
              <TextInput
                style={[
                  styles.observacao,
                  {
                    backgroundColor: cores.inputBackground,
                    color: cores.textPrimary,
                  },
                ]}
                value={observacao}
                onChangeText={setObservacao}
                placeholder="Ex: Retirar cebola"
                placeholderTextColor={cores.textSecondary}
                maxLength={150}
              />
            </View>
            <View style={styles.quantidadeContainer}>
              <Text style={[styles.tituloMenor, { color: cores.textPrimary }]}>
                Quantidade
              </Text>
              <View style={styles.indicadorQuantidade}>
                <Pressable
                  onPress={() =>
                    setQuantidade((prevState) =>
                      prevState === 1 ? prevState : prevState - 1,
                    )
                  }
                >
                  <AntDesign name="minus" size={20} color={cores.primary} />
                </Pressable>
                <Text style={{ color: cores.textPrimary, fontSize: 16 }}>
                  {quantidade}
                </Text>
                <Pressable
                  onPress={() => setQuantidade((prevState) => prevState + 1)}
                >
                  <AntDesign name="plus" size={20} color={cores.primary} />
                </Pressable>
              </View>
            </View>
            <View style={styles.precoContainer}>
              <Text style={[styles.tituloMenor, { color: cores.textPrimary }]}>
                Total
              </Text>
              <Text style={[styles.tituloMenor, { color: cores.textPrimary }]}>
                R$ {produto.preco * quantidade}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.btn}>
          <ActionBtn
            txt="Adicionar ao carrinho"
            executar={adicionarCarrinho}
            carregando={false}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    width: "100%",
    height: 150,
  },
  produtoContainer: {
    padding: 20,
    gap: 15,
  },
  descritivo: {
    gap: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 16,
  },
  icone: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  observacao: {
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  quantidadeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tituloMenor: {
    fontSize: 16,
    fontWeight: "bold",
  },
  indicadorQuantidade: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },
  precoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
