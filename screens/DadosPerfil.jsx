import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useTema } from "../contexts/TemaContext";
import dadosPerfil from "../data/perfil/dadosPerfil";
import ApresentarDados from "../components/ApresentarDados";
import TituloSecao from "../components/TituloSecao";

export default function Perfil() {
  const { cores } = useTema();
  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <ScrollView
        contentContainerStyle={styles.dadosPerfil}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.pessoaContainer}>
          <Image
            source={require("../data/perfil/foto_perfil.jpg")}
            style={styles.imagemPerfil}
          />
          <Text style={[styles.nome, { color: cores.textPrimary }]}>
            {dadosPerfil.nome}
          </Text>
        </View>
        <View style={styles.secao}>
          <View style={styles.infosContainer}>
            <ApresentarDados label="E-mail:" txt={dadosPerfil.email} />
            <ApresentarDados label="Telefone:" txt={dadosPerfil.telefone} />
            <ApresentarDados
              label="Nascimento:"
              txt={dadosPerfil.dataNascimento}
            />
            <ApresentarDados label="Gênero:" txt={dadosPerfil.genero} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  titulo: {
    padding: 15,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  dadosPerfil: {
    gap: 20,
    paddingBottom: 20,
  },
  pessoaContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 15,
    gap: 15,
  },
  imagemPerfil: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },
  secao: {
    gap: 6,
  },
  infosContainer: {
    gap: 3,
  },
});
