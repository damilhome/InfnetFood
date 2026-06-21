export async function buscarDados(url) {
  const dados = { resposta: null, erro: null };
  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro na requisição: Status ${resposta.status}`);
    }
    dados.resposta = await resposta.json();
  } catch (error) {
    dados.erro = error.message || error;
  }
  return dados;
}

export async function carregarDados(url, mudarEstado, mudarCarregando) {
  mudarCarregando(true);
  const resultado = await buscarDados(url);

  if (!resultado.erro) {
    const listaOrdenada = [...resultado.resposta].sort((a, b) =>
      a.nome.localeCompare(b.nome),
    );
    mudarEstado(listaOrdenada);
  } else {
    console.error("Erro ao carregar dados: ", resultado.erro);
  }

  mudarCarregando(false);
}
