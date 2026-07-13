import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import { useTema } from "../contexts/TemaContext";
import Select from "../components/Select";
import { useEffect, useRef, useState } from "react";
import { carregarDados } from "../utils/buscarDados";
import { AntDesign } from "@expo/vector-icons";
import ActionBtn from "../components/ActionBtn";
import { useEndereco } from "../contexts/EnderecoContext";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const URL_ESTADOS =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const URL_CIDADES_PARCIAL =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/";

export default function EditarEndereco() {
  const route = useRoute();
  const { index } = route.params;
  const { listaEnderecos, criarNovoEndereco, editarEndereco } = useEndereco();
  const { cores } = useTema();
  const [enderecoParaEditar, setEnderecoParaEditar] = useState({});

  const navigation = useNavigation();
  const [carregandoEstados, setCarregandoEstados] = useState(false);
  const [carregandoCidades, setCarregandoCidades] = useState(false);
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState({
    nome: "Selecione um estado...",
    uf: "",
    selecionado: false,
  });
  const [cidadeSelecionada, setCidadeSelecionada] = useState({
    nome: "Selecione uma cidade...",
    selecionado: false,
  });
  const [mostrarPadding, setMostrarPadding] = useState(false);
  const scrollViewRef = useRef(null);

  const [logradouro, setLogradouro] = useState(null);
  const [numero, setNumero] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [semNumero, setSemNumero] = useState(false);
  const [complemento, setComplemento] = useState(null);
  const [pontoReferencia, setPontoReferencia] = useState(null);
  const [apelido, setApelido] = useState(null);
  const [msgsErro, setMsgsErro] = useState({});
  const [houveErro, setHouveErro] = useState(false);

  function verificarCampos() {
    let erros = {};

    if (!estadoSelecionado.selecionado) {
      erros.erroEstado = true;
    }
    if (!cidadeSelecionada.selecionado) {
      erros.erroCidade = true;
    }
    if (!logradouro) {
      erros.logradouro = "Preencha o campo Logradouro";
    }
    if (!numero) {
      erros.numero =
        'Preencha o campo Número ou marque "Sem número" caso não exista';
    }
    if (!bairro) {
      erros.bairro = "Preencha o campo Bairro";
    }
    if (!complemento) {
      erros.complemento = "Preencha o campo de Complemento";
    }
    if (!pontoReferencia) {
      erros.pontoReferencia = "Preencha o campo de Ponto de Referência";
    }
    if (!apelido) {
      erros.apelido = "O campo Apelido é obrigatório";
    }

    setMsgsErro(erros);
    const valido = Object.keys(erros).length > 0;
    setHouveErro(valido);
    return valido;
  }

  /* TODO: Atualizar a função para apenas atualizar o endereço atual */

  function atualizarEndereco() {
    const erro = verificarCampos();

    if (!erro) {
      const novoEndereco = {
        estado: estadoSelecionado.nome,
        uf: estadoSelecionado.uf,
        cidade: cidadeSelecionada.nome,
        logradouro,
        numero,
        bairro,
        complemento,
        pontoReferencia,
        apelido,
      };
      editarEndereco(index, novoEndereco);
      navigation.goBack();
    }
  }

  useEffect(() => {
    setEnderecoParaEditar(listaEnderecos[index]);
  }, []);

  useEffect(() => {
    setEstadoSelecionado({
      nome: enderecoParaEditar.estado,
      uf: enderecoParaEditar.uf,
      selecionado: true,
    });
  }, [enderecoParaEditar]);

  useEffect(() => {
    setCidadeSelecionada({
      nome: enderecoParaEditar.cidade,
      selecionado: true,
    });
  }, [estadoSelecionado]);

  useEffect(() => {
    setLogradouro(enderecoParaEditar.logradouro);
    setNumero(enderecoParaEditar.numero);
    if (enderecoParaEditar.numero === "S/N") setSemNumero(!semNumero);
    setBairro(enderecoParaEditar.bairro);
    setComplemento(enderecoParaEditar.complemento);
    setPontoReferencia(enderecoParaEditar.pontoReferencia);
    setApelido(enderecoParaEditar.apelido);
  }, [enderecoParaEditar]);

  useEffect(() => {
    carregarDados(
      `${URL_CIDADES_PARCIAL}${enderecoParaEditar.uf}/municipios`,
      setCidades,
      setCarregandoCidades,
    );
  }, [estadoSelecionado]);

  useEffect(() => {
    carregarDados(URL_ESTADOS, setEstados, setCarregandoEstados);
  }, []);

  useEffect(() => {
    if (semNumero) {
      setNumero("S/N");
    } else {
      setNumero(null);
    }
  }, [semNumero]);

  useEffect(() => {
    if (houveErro) {
      verificarCampos();
    }
  }, [logradouro, numero, complemento, pontoReferencia, apelido]);

  useEffect(() => {
    const adicionarPadding = Keyboard.addListener("keyboardDidShow", () => {
      setMostrarPadding(true);
    });
    const removerPadding = Keyboard.addListener("keyboardDidHide", () => {
      setMostrarPadding(false);
    });

    return () => {
      adicionarPadding.remove();
      removerPadding.remove();
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: cores.background,
          paddingBottom: mostrarPadding ? 360 : 25,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 25, paddingBottom: 10 }}
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
      >
        <View
          style={[
            styles.selectContainer,
            { borderBottomColor: cores.inputBorder },
          ]}
        >
          <Select
            opcoes={carregandoEstados ? null : estados}
            valor={
              carregandoEstados
                ? { nome: "Carregando estados...", uf: "" }
                : estadoSelecionado
            }
            setValor={setEstadoSelecionado}
            campo="estado"
            erroSelecao={msgsErro.erroEstado}
            resolverErroSelecao={setMsgsErro}
          />
          <Select
            opcoes={cidades}
            valor={cidadeSelecionada}
            setValor={setCidadeSelecionada}
            campo="cidade"
            erroSelecao={msgsErro.erroCidade}
            resolverErroSelecao={setMsgsErro}
          />
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <Text style={[styles.label, { color: cores.textPrimary }]}>
                Logradouro
              </Text>
              <Text style={[styles.txtSize, { color: cores.error }]}>*</Text>
            </View>
            <View style={styles.inputMsg}>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor: msgsErro.logradouro
                      ? cores.error
                      : cores.inputBorder,
                    color: cores.textPrimary,
                  },
                ]}
                placeholder="Rua, Avenida"
                placeholderTextColor={cores.textSecondary}
                value={logradouro}
                onChangeText={setLogradouro}
              />
              {msgsErro.logradouro && (
                <Text style={{ color: cores.error, fontSize: 12 }}>
                  {msgsErro.logradouro}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.inputNumero}>
            <View style={[styles.inputContainer, styles.larguraMetade]}>
              <View style={styles.labelContainer}>
                <Text style={[styles.label, { color: cores.textPrimary }]}>
                  Número
                </Text>
                <Text style={[styles.txtSize, { color: cores.error }]}>*</Text>
              </View>
              <View style={styles.inputMsg}>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor: msgsErro.numero
                        ? cores.error
                        : cores.inputBorder,
                      color: cores.textPrimary,
                    },
                  ]}
                  placeholder={semNumero ? "S/N" : "170"}
                  placeholderTextColor={cores.textSecondary}
                  value={numero}
                  onChangeText={setNumero}
                  editable={!semNumero}
                />
                {msgsErro.numero && (
                  <Text style={{ color: cores.error, fontSize: 12 }}>
                    {msgsErro.numero}
                  </Text>
                )}
              </View>
            </View>
            <View style={[styles.semNumeroContainer, styles.larguraMetade]}>
              <Pressable
                style={[
                  styles.check,
                  {
                    backgroundColor: semNumero
                      ? cores.primary
                      : cores.textSecondary,
                  },
                ]}
                onPress={() => setSemNumero(!semNumero)}
              >
                {semNumero && (
                  <AntDesign name="check" size={12} color={cores.textPrimary} />
                )}
              </Pressable>
              <Text style={{ color: cores.textPrimary }}>Sem número</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <Text style={[styles.label, { color: cores.textPrimary }]}>
                Bairro
              </Text>
              <Text style={[styles.txtSize, { color: cores.error }]}>*</Text>
            </View>
            <View style={styles.inputMsg}>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor: msgsErro.bairro
                      ? cores.error
                      : cores.inputBorder,
                    color: cores.textPrimary,
                  },
                ]}
                placeholder="Copacabana"
                placeholderTextColor={cores.textSecondary}
                value={bairro}
                onChangeText={setBairro}
              />
              {msgsErro.bairro && (
                <Text style={{ color: cores.error, fontSize: 12 }}>
                  {msgsErro.bairro}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <Text style={[styles.label, { color: cores.textPrimary }]}>
                Complemento
              </Text>
              <Text style={[styles.txtSize, { color: cores.error }]}>*</Text>
            </View>
            <View style={styles.inputMsg}>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor: msgsErro.complemento
                      ? cores.error
                      : cores.inputBorder,
                    color: cores.textPrimary,
                  },
                ]}
                placeholder="Sala 402, apartamento 402"
                placeholderTextColor={cores.textSecondary}
                value={complemento}
                onChangeText={setComplemento}
              />
              {msgsErro.complemento && (
                <Text style={{ color: cores.error, fontSize: 12 }}>
                  {msgsErro.complemento}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <Text style={[styles.label, { color: cores.textPrimary }]}>
                Ponto de Referência
              </Text>
              <Text style={[styles.txtSize, { color: cores.error }]}>*</Text>
            </View>
            <View style={styles.inputMsg}>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor: msgsErro.pontoReferencia
                      ? cores.error
                      : cores.inputBorder,
                    color: cores.textPrimary,
                  },
                ]}
                placeholder="Em frente ao Instituto Infnet"
                placeholderTextColor={cores.textSecondary}
                value={pontoReferencia}
                onChangeText={setPontoReferencia}
              />
              {msgsErro.pontoReferencia && (
                <Text style={{ color: cores.error, fontSize: 12 }}>
                  {msgsErro.pontoReferencia}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <Text style={[styles.label, { color: cores.textPrimary }]}>
                Apelido
              </Text>
              <Text style={[styles.txtSize, { color: cores.error }]}>*</Text>
            </View>
            <View style={styles.inputMsg}>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor: msgsErro.apelido
                      ? cores.error
                      : cores.inputBorder,
                    color: cores.textPrimary,
                  },
                ]}
                placeholder="Apenas você pode ver (ex.: Casa, Trabalho)"
                placeholderTextColor={cores.textSecondary}
                value={apelido}
                onChangeText={setApelido}
              />
              {msgsErro.apelido && (
                <Text style={{ color: cores.error, fontSize: 12 }}>
                  {msgsErro.apelido}
                </Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <ActionBtn
        txt="Atualizar"
        executar={atualizarEndereco}
        carregando={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    gap: 10,
  },
  selectContainer: {
    gap: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
  },
  inputs: {
    gap: 24,
  },
  inputContainer: {
    gap: 5,
  },
  labelContainer: {
    flexDirection: "row",
    gap: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  txtSize: {
    fontSize: 16,
  },
  inputMsg: {
    gap: 5,
  },
  input: {
    borderBottomWidth: 2,
  },
  inputNumero: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  semNumeroContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  larguraMetade: {
    width: "50%",
  },
  check: {
    width: 25,
    height: 25,
    backgroundColor: "red",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 1,
    paddingLeft: 2,
  },
});
