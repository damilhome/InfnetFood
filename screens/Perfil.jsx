import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useTema } from "../contexts/TemaContext";
import { deslogarUsuario } from "../services/autenticarFirebase";
import dadosPerfil from "../data/perfil/dadosPerfil";
import ApresentarDados from "../components/ApresentarDados";
import ResumoPerfil from "../components/ResumoPerfil";
import TituloSecao from "../components/TituloSecao";
import ConfigBtn from "../components/ConfigBtn";
import ActionBtn from "../components/ActionBtn";

export default function Perfil() {
  const { cores } = useTema();
  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>Perfil</Text>
      <ScrollView
        contentContainerStyle={styles.dadosPerfil}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 20 }}>
          <ResumoPerfil nome={dadosPerfil.nome} email={dadosPerfil.email} />
          <View>
            <ConfigBtn
              iconName="person"
              txt="Dados do perfil"
              navigateTo="Dados Perfil"
            />
            <ConfigBtn
              iconName="settings"
              txt="Configurações"
              navigateTo="Configuracoes"
            />
            <ConfigBtn
              iconName="location"
              txt="Endereços"
              navigateTo="Endereços"
            />
          </View>
        </View>
        <ActionBtn txt="Sair" executar={deslogarUsuario} />
      </ScrollView>
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
  dadosPerfil: {
    paddingVertical: 20,
    flex: 1,
    justifyContent: "space-between",
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

{
  /* <View style={styles.pessoaContainer}>
          <Image
            source={require("../data/perfil/foto_perfil.jpg")}
            style={styles.imagemPerfil}
          />
          <Text style={[styles.nome, { color: cores.textPrimary }]}>
            {dadosPerfil.nome}
          </Text>
        </View> */
}
{
  /* <View style={styles.secao}>
          <TituloSecao titulo="Usuário" />
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
        <View style={styles.secao}>
          <TituloSecao titulo="Endereço" />
          <View style={styles.infosContainer}>
            <ApresentarDados label="Rua:" txt={dadosPerfil.rua} />
            <ApresentarDados label="Número:" txt={dadosPerfil.numero} />
            <ApresentarDados label="Bairro:" txt={dadosPerfil.bairro} />
            <ApresentarDados label="Cidade:" txt={dadosPerfil.cidade} />
            <ApresentarDados label="Estado:" txt={dadosPerfil.estado} />
            <ApresentarDados
              label="Complemento:"
              txt={dadosPerfil.complemento}
            />
          </View>
        </View> */
}
