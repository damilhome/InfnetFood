import AsyncStorage from "@react-native-async-storage/async-storage";

export async function salvarDados(dados, chave) {
  try {
    const jsonValue = JSON.stringify(dados);
    await AsyncStorage.setItem(chave, jsonValue);
  } catch (error) {
    console.error(error);
  }
}

export async function recuperarDados(chave) {
  try {
    const jsonValue = await AsyncStorage.getItem(chave);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(error);
  }
}

export async function removerDados(chave) {
  try {
    await AsyncStorage.removeItem(chave);
  } catch (error) {
    console.error("Erro ao remover dado do AsyncStorage:", error);
  }
}
