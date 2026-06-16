export const categorias = [
  {
    id: "1",
    nome: "Açaí",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    nome: "Gelados",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    nome: "Salgados",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    nome: "Sobremesas",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    nome: "Almoço",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    nome: "Cafeteria",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    nome: "Massas",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    nome: "Sopas e Caldos",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "9",
    nome: "Hambúrguer",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "10",
    nome: "Pizzas",
    imagem:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    nome: "Saudável",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "12",
    nome: "Churrascaria",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "13",
    nome: "Hot Dog",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "14",
    nome: "Japonês",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const produtos = [
  {
    id: "a1",
    categoriaId: "1",
    nome: "Açaí Tradicional",
    tamanho: "300ml",
    preco: 15.9,
    descricao:
      "O clássico que não tem erro! Açaí puro batido com xarope de guaraná, acompanhado de fatias de banana fresca e granola crocante.",
    ingredientes: [
      "Açaí",
      "Xarope de Guaraná",
      "Banana",
      "Granola Tradicional",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "a2",
    categoriaId: "1",
    nome: "Açaí com Morango e Nutella",
    tamanho: "500ml",
    preco: 24.5,
    descricao:
      "A combinação mais amada. Generosas camadas de creme de açaí intercaladas com Nutella original e pedaços de morangos frescos.",
    ingredientes: ["Açaí", "Morango", "Nutella", "Leite Condensado"],
    avaliacao: 4.9,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "a3",
    categoriaId: "1",
    nome: "Açaí Turbinado (Pré-Treino)",
    tamanho: "500ml",
    preco: 28.9,
    descricao:
      "Ideal para dar energia! Açaí batido com Whey Protein isolado, paçoca, banana e um toque de mel natural.",
    ingredientes: ["Açaí", "Whey Protein Baunilha", "Paçoca", "Banana", "Mel"],
    avaliacao: 4.7,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "a4",
    categoriaId: "1",
    nome: "Barca de Açaí Família",
    tamanho: "1 Litro",
    preco: 55.0,
    descricao:
      "Perfeita para dividir com a galera. Barca de 1 litro de açaí recheada com 5 acompanhamentos à escolha do chef.",
    ingredientes: [
      "Açaí",
      "Morango",
      "Kiwi",
      "Banana",
      "Leite em Pó",
      "Granola",
      "Calda de Chocolate",
    ],
    avaliacao: 5.0,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "a5",
    categoriaId: "1",
    nome: "Açaí Tropical",
    tamanho: "700ml",
    preco: 32.0,
    descricao:
      "Uma explosão de frescor! Açaí acompanhado de frutas tropicais selecionadas, finalizado com coco ralado.",
    ingredientes: [
      "Açaí",
      "Manga",
      "Kiwi",
      "Abacaxi",
      "Coco Ralado",
      "Leite Condensado",
    ],
    avaliacao: 4.6,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "a6",
    categoriaId: "1",
    nome: "Açaí Crocante",
    tamanho: "500ml",
    preco: 22.9,
    descricao:
      "Para quem ama textura! Açaí cremoso com muita crocância, misturando amendoim e flocos de chocolate.",
    ingredientes: [
      "Açaí",
      "Ovomaltine",
      "Chocoball",
      "Amendoim Triturado",
      "Castanha de Caju",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "a7",
    categoriaId: "1",
    nome: "Açaí Zero Açúcar",
    tamanho: "300ml",
    preco: 18.5,
    descricao:
      "Açaí 100% puro, batido sem xarope de guaraná e adoçado levemente com stévia. Acompanha mix de frutas vermelhas.",
    ingredientes: [
      "Açaí Puro",
      "Amoras",
      "Framboesas",
      "Stévia",
      "Semente de Chia",
    ],
    avaliacao: 4.5,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "a8",
    categoriaId: "1",
    nome: "Açaí Kids",
    tamanho: "250ml",
    preco: 14.0,
    descricao:
      "A porção ideal para as crianças, bem colorida e divertida, com confetes de chocolate e muita calda.",
    ingredientes: [
      "Açaí",
      "Confetes de Chocolate (M&M's)",
      "Leite Ninho",
      "Calda de Morango",
    ],
    avaliacao: 4.9,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "a9",
    categoriaId: "1",
    nome: "Copo da Felicidade de Açaí",
    tamanho: "400ml",
    preco: 29.9,
    descricao:
      "Sobremesa no copo! Camadas alternadas de açaí cremoso, creme de cupuaçu, pedaços de brownie artesanal e morangos.",
    ingredientes: [
      "Açaí",
      "Creme de Cupuaçu",
      "Brownie",
      "Morango",
      "Creme de Avelã",
    ],
    avaliacao: 5.0,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "a10",
    categoriaId: "1",
    nome: "Açaí Proteico Vegano",
    tamanho: "500ml",
    preco: 27.5,
    descricao:
      "Nutritivo e 100% plant-based. Açaí batido com proteína de ervilha, coberto com uma generosa camada de pasta de amendoim.",
    ingredientes: [
      "Açaí",
      "Proteína de Ervilha",
      "Pasta de Amendoim Integral",
      "Banana",
      "Semente de Abóbora",
    ],
    avaliacao: 4.7,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1684403731883-67a71a793d2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g1",
    categoriaId: "2",
    nome: "Milkshake Clássico de Chocolate",
    tamanho: "500ml",
    preco: 18.9,
    descricao:
      "O clássico atemporal! Sorvete de chocolate batido com leite integral, muita calda de chocolate e finalizado com chantilly fresco.",
    ingredientes: [
      "Sorvete de Chocolate",
      "Leite",
      "Calda de Chocolate",
      "Chantilly",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g2",
    categoriaId: "2",
    nome: "Gelato Artesanal de Pistache",
    tamanho: "Pote 300g",
    preco: 32.5,
    descricao:
      "Autêntico gelato italiano feito com pistaches selecionados importados. Textura incrivelmente cremosa e sabor intenso.",
    ingredientes: [
      "Leite Fresco",
      "Creme de Leite",
      "Pistache Importado",
      "Açúcar",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g3",
    categoriaId: "2",
    nome: "Milkshake de Ovomaltine",
    tamanho: "500ml",
    preco: 22.0,
    descricao:
      "Super crocante! Sorvete de creme batido com flocos crocantes de Ovomaltine e borda recheada com creme de avelã.",
    ingredientes: ["Sorvete de Creme", "Ovomaltine", "Creme de Avelã", "Leite"],
    avaliacao: 5.0,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g4",
    categoriaId: "2",
    nome: "Banana Split Tradicional",
    tamanho: "Porção Individual",
    preco: 28.9,
    descricao:
      "A sobremesa perfeita! Uma banana inteira cortada ao meio, servida com três bolas de sorvete (creme, chocolate e morango), caldas variadas e castanhas.",
    ingredientes: [
      "Banana",
      "Sorvete de Creme",
      "Sorvete de Chocolate",
      "Sorvete de Morango",
      "Calda de Caramelo",
      "Castanha de Caju",
      "Cereja",
    ],
    avaliacao: 4.7,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g5",
    categoriaId: "2",
    nome: "Paleta Mexicana de Morango com Leite Condensado",
    tamanho: "120g",
    preco: 14.5,
    descricao:
      "Picolé artesanal feito com morangos frescos e um recheio generoso do mais puro leite condensado. Derrete na boca!",
    ingredientes: ["Morango Fresco", "Água", "Açúcar", "Leite Condensado"],
    avaliacao: 4.9,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g6",
    categoriaId: "2",
    nome: "Taça Colegial (Sundae)",
    tamanho: "350ml",
    preco: 19.9,
    descricao:
      "Duas bolas de sorvete de baunilha cobertas com muita calda quente de caramelo, amendoim granulado e um toque de chantilly.",
    ingredientes: [
      "Sorvete de Baunilha",
      "Calda de Caramelo Quente",
      "Amendoim",
      "Chantilly",
    ],
    avaliacao: 4.6,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g7",
    categoriaId: "2",
    nome: "Sorvete de Flocos",
    tamanho: "Pote 1 Litro",
    preco: 35.0,
    descricao:
      "Para a família toda! Pote de 1 litro de sorvete de creme com deliciosos e crocantes pedaços de chocolate meio amargo.",
    ingredientes: ["Sorvete de Creme", "Flocos de Chocolate Meio Amargo"],
    avaliacao: 4.8,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g8",
    categoriaId: "2",
    nome: "Milkshake de Morango com Nutella",
    tamanho: "500ml",
    preco: 24.5,
    descricao:
      "Equilíbrio perfeito! Sorvete de morango batido com pedaços da fruta, copo lambuzado com Nutella e finalizado com chantilly.",
    ingredientes: [
      "Sorvete de Morango",
      "Morangos Frescos",
      "Nutella",
      "Leite",
      "Chantilly",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g9",
    categoriaId: "2",
    nome: "Sorbet de Limão Siciliano (Vegano)",
    tamanho: "Pote 300g",
    preco: 26.9,
    descricao:
      "Refrescância máxima. Sorbet à base de água, preparado com o puro suco e raspas de limão siciliano. Sem lactose e vegano.",
    ingredientes: [
      "Água",
      "Limão Siciliano",
      "Açúcar Orgânico",
      "Goma de Alfarroba",
    ],
    avaliacao: 4.7,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "g10",
    categoriaId: "2",
    nome: "Taça Suprema de Ninho com Nutella",
    tamanho: "400ml",
    preco: 34.0,
    descricao:
      "A sobremesa indulgente definitiva! Sorvete de Leite Ninho, intercalado com camadas grossas de Nutella pura e bombons trufados.",
    ingredientes: [
      "Sorvete de Leite Ninho",
      "Nutella",
      "Bombons Trufados",
      "Leite em Pó Extra",
    ],
    avaliacao: 5.0,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s1",
    categoriaId: "3",
    nome: "Coxinha de Frango com Catupiry",
    tamanho: "150g",
    preco: 8.5,
    descricao:
      "A rainha dos salgados! Massa de batata super macia por dentro e crocante por fora, recheada com frango desfiado temperado e requeijão original.",
    ingredientes: [
      "Farinha de Trigo",
      "Batata",
      "Frango Desfiado",
      "Requeijão Catupiry",
      "Cebolinha",
      "Farinha de Rosca",
    ],
    avaliacao: 4.9,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s2",
    categoriaId: "3",
    nome: "Kibe Frito Recheado",
    tamanho: "120g",
    preco: 7.9,
    descricao:
      "Kibe tradicional árabe, com casquinha super crocante, recheado com uma porção generosa de queijo muçarela derretido.",
    ingredientes: [
      "Carne Moída",
      "Trigo para Kibe",
      "Hortelã",
      "Queijo Muçarela",
      "Temperos Sírios",
    ],
    avaliacao: 4.7,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s3",
    categoriaId: "3",
    nome: "Pastel de Feira (Carne com Queijo)",
    tamanho: "20cm",
    preco: 10.0,
    descricao:
      "O autêntico pastel de feira! Massa fina e muito crocante, recheado de ponta a ponta com carne moída temperada e queijo derretido.",
    ingredientes: [
      "Massa de Pastel",
      "Carne Moída",
      "Queijo Muçarela",
      "Azeitona",
      "Óleo Vegetal",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s4",
    categoriaId: "3",
    nome: "Empada de Palmito",
    tamanho: "100g",
    preco: 7.5,
    descricao:
      "Massa podre que derrete na boca, recheada com um creme suculento de palmito pupunha, azeitonas e toque de salsinha.",
    ingredientes: [
      "Farinha de Trigo",
      "Manteiga",
      "Palmito Pupunha",
      "Tomate",
      "Azeitona",
    ],
    avaliacao: 4.6,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s5",
    categoriaId: "3",
    nome: "Porção de Pão de Queijo",
    tamanho: "10 unidades",
    preco: 15.0,
    descricao:
      "Porção com 10 mini pães de queijo assados na hora. Casquinha levemente crocante e miolo puxa-puxa cheio de queijo minas.",
    ingredientes: [
      "Polvilho Azedo",
      "Queijo Minas Padrão",
      "Queijo Parmesão",
      "Leite",
      "Ovos",
    ],
    avaliacao: 5.0,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s6",
    categoriaId: "3",
    nome: "Esfiha Aberta de Carne",
    tamanho: "Unidade",
    preco: 4.5,
    descricao:
      "Esfiha síria aberta, com massa fofinha e recheio de carne moída bem temperada com limão, tomate e tahine.",
    ingredientes: [
      "Farinha de Trigo",
      "Carne Moída",
      "Tomate",
      "Cebola",
      "Limão",
      "Tahine",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s7",
    categoriaId: "3",
    nome: "Bolinha de Queijo",
    tamanho: "Porção (6 unidades)",
    preco: 12.0,
    descricao:
      "Clássico de festas! Bolinhas com massa suave, empanadas e fritas, recheadas com um mix de três queijos que esticam a cada mordida.",
    ingredientes: [
      "Queijo Muçarela",
      "Queijo Parmesão",
      "Provolone",
      "Farinha de Trigo",
      "Ovos",
    ],
    avaliacao: 4.9,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s8",
    categoriaId: "3",
    nome: "Enroladinho de Salsicha Assado",
    tamanho: "130g",
    preco: 6.5,
    descricao:
      "Massa leve e fofinha, levemente adocicada, envolvendo uma salsicha inteira e finalizada com queijo parmesão gratinado por cima.",
    ingredientes: [
      "Farinha de Trigo",
      "Salsicha",
      "Leite",
      "Manteiga",
      "Parmesão",
    ],
    avaliacao: 4.5,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s9",
    categoriaId: "3",
    nome: "Risólis de Presunto e Queijo",
    tamanho: "120g",
    preco: 7.0,
    descricao:
      "Salgado empanado em formato de meia lua, com casquinha dourada e recheio bem cremoso de presunto e muçarela com orégano.",
    ingredientes: [
      "Farinha de Trigo",
      "Presunto",
      "Queijo Muçarela",
      "Orégano",
      "Leite",
    ],
    avaliacao: 4.7,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s10",
    categoriaId: "3",
    nome: "Coxinha Vegana de Jaca",
    tamanho: "150g",
    preco: 9.5,
    descricao:
      "Opção deliciosa e 100% vegetal. Massa de mandioca empanada sem ovos, recheada com carne de jaca verde muito bem temperada.",
    ingredientes: [
      "Mandioca",
      "Carne de Jaca",
      "Cebola",
      "Alho",
      "Colorau",
      "Salsa",
    ],
    avaliacao: 4.6,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1685708683548-f82156a40056?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob1",
    categoriaId: "4",
    nome: "Pudim de Leite Condensado",
    tamanho: "Fatia (150g)",
    preco: 12.0,
    descricao:
      "O clássico pudim de padaria, super cremoso, lisinho (sem furinhos) e com muita calda de caramelo brilhante.",
    ingredientes: ["Leite Condensado", "Leite Integral", "Ovos", "Açúcar"],
    avaliacao: 4.9,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob2",
    categoriaId: "4",
    nome: "Bolo de Pote Ninho com Morango",
    tamanho: "250ml",
    preco: 15.9,
    descricao:
      "Massa branca bem fofinha e úmida, intercalada com um creme espesso de Leite Ninho original e geleia artesanal de morango com pedaços.",
    ingredientes: [
      "Farinha de Trigo",
      "Leite Ninho",
      "Morango Fresco",
      "Leite Condensado",
      "Manteiga",
    ],
    avaliacao: 4.8,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob3",
    categoriaId: "4",
    nome: "Brownie de Chocolate com Nozes",
    tamanho: "Unidade (100g)",
    preco: 10.5,
    descricao:
      "Casquinha super crocante por fora e interior denso e muito úmido (fudgy). Feito com chocolate meio amargo e nozes tostadas picadas.",
    ingredientes: [
      "Chocolate Meio Amargo",
      "Manteiga",
      "Ovos",
      "Açúcar",
      "Farinha de Trigo",
      "Nozes",
    ],
    avaliacao: 4.7,
    tempoEntrega: "10-15 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob4",
    categoriaId: "4",
    nome: "Cheesecake de Frutas Vermelhas",
    tamanho: "Fatia (180g)",
    preco: 18.9,
    descricao:
      "Autêntica cheesecake estilo Nova York, com base crocante de biscoito amanteigado e uma generosa cobertura de calda azedinha de frutas vermelhas.",
    ingredientes: [
      "Cream Cheese",
      "Biscoito Amanteigado",
      "Manteiga",
      "Frutas Vermelhas",
      "Açúcar",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob5",
    categoriaId: "4",
    nome: "Petit Gâteau Tradicional",
    tamanho: "Porção (120g)",
    preco: 22.0,
    descricao:
      "Bolinho quente de chocolate belga com o interior cremoso e derretido. Atenção: por ser delivery, não acompanha sorvete de creme.",
    ingredientes: [
      "Chocolate Belga Meio Amargo",
      "Manteiga",
      "Ovos",
      "Farinha de Trigo",
      "Açúcar",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob6",
    categoriaId: "4",
    nome: "Fatia de Torta de Limão",
    tamanho: "Fatia (150g)",
    preco: 14.5,
    descricao:
      "Equilíbrio perfeito de sabores. Massa sablée bem crocante, recheio muito cremoso e azedinho de limão, coberta com picos de merengue suíço maçaricado.",
    ingredientes: [
      "Leite Condensado",
      "Limão Tahiti",
      "Biscoito Maisena",
      "Manteiga",
      "Claras",
      "Açúcar",
    ],
    avaliacao: 4.6,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob7",
    categoriaId: "4",
    nome: "Mousse Aerado de Maracujá",
    tamanho: "Taça (200ml)",
    preco: 12.9,
    descricao:
      "Mousse extremamente leve, aerado e refrescante. Feito com suco natural da fruta e finalizado com uma bela calda de sementes de maracujá.",
    ingredientes: [
      "Suco Natural de Maracujá",
      "Leite Condensado",
      "Creme de Leite",
      "Gelatina Incolor",
      "Sementes de Maracujá",
    ],
    avaliacao: 4.7,
    tempoEntrega: "10-15 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob8",
    categoriaId: "4",
    nome: "Tiramisu Italiano Clássico",
    tamanho: "Pote (180g)",
    preco: 24.0,
    descricao:
      "Para paladares exigentes. Camadas de biscoito champanhe embebidos em café expresso puro, intercalados com legítimo creme de mascarpone e polvilhados com cacau.",
    ingredientes: [
      "Queijo Mascarpone",
      "Biscoito Champanhe",
      "Café Expresso",
      "Cacau em Pó",
      "Açúcar",
      "Gemas",
    ],
    avaliacao: 5.0,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob9",
    categoriaId: "4",
    nome: "Fatia de Torta Banoffee",
    tamanho: "Fatia (160g)",
    preco: 16.5,
    descricao:
      "A febre do momento! Massa de biscoito triturado, uma camada espessa de doce de leite artesanal, rodelas de banana nanica e chantilly fresco com canela.",
    ingredientes: [
      "Biscoito Triturado",
      "Manteiga",
      "Doce de Leite Artesanal",
      "Banana",
      "Chantilly",
      "Canela em Pó",
    ],
    avaliacao: 4.9,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sob10",
    categoriaId: "4",
    nome: "Caixa de Brigadeiros Gourmet",
    tamanho: "6 unidades",
    preco: 18.0,
    descricao:
      "Perfeito para matar a vontade ou presentear. Seis brigadeiros grandes em forminhas finas, feitos com chocolate nobre e granulados selecionados.",
    ingredientes: [
      "Leite Condensado",
      "Creme de Leite",
      "Chocolate Belga Ao Leite",
      "Manteiga",
      "Granulado Callebaut",
    ],
    avaliacao: 5.0,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "al1",
    categoriaId: "5",
    nome: "Prato Feito (PF) de Bife Acebolado",
    tamanho: "Individual (500g)",
    preco: 22.9,
    descricao:
      "O clássico do dia a dia. Bife de contrafilé grelhado com bastante cebola, acompanhado de arroz branco soltinho, feijão carioca, farofa e batata frita.",
    ingredientes: [
      "Contrafilé",
      "Cebola",
      "Arroz Branco",
      "Feijão Carioca",
      "Batata Frita",
      "Farinha de Mandioca",
    ],
    avaliacao: 4.8,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "al2",
    categoriaId: "5",
    nome: "Strogonoff de Frango",
    tamanho: "Individual (450g)",
    preco: 24.5,
    descricao:
      "Strogonoff cremoso feito com peito de frango em cubos e champignon. Acompanha porção generosa de arroz branco e batata palha extra fina.",
    ingredientes: [
      "Peito de Frango",
      "Creme de Leite",
      "Molho de Tomate",
      "Champignon",
      "Arroz Branco",
      "Batata Palha",
    ],
    avaliacao: 4.9,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "al3",
    categoriaId: "5",
    nome: "Feijoada Completa",
    tamanho: "Serve 2 pessoas (800g)",
    preco: 45.0,
    descricao:
      "A tradicional feijoada brasileira com carnes nobres (carne seca, lombo, paio e calabresa). Acompanha arroz, couve refogada, torresmo crocante e laranja.",
    ingredientes: [
      "Feijão Preto",
      "Carne Seca",
      "Paio",
      "Calabresa",
      "Arroz",
      "Couve",
      "Torresmo",
      "Laranja",
    ],
    avaliacao: 4.9,
    tempoEntrega: "30-45 min",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "al4",
    categoriaId: "5",
    nome: "Bife à Parmegiana",
    tamanho: "Individual (550g)",
    preco: 32.9,
    descricao:
      "Filé mignon empanado e frito, coberto com molho de tomate artesanal e muito queijo muçarela gratinado. Acompanha arroz e purê de batatas.",
    ingredientes: [
      "Filé Mignon",
      "Molho de Tomate",
      "Queijo Muçarela",
      "Farinha de Rosca",
      "Arroz Branco",
      "Batata",
    ],
    avaliacao: 4.7,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "al5",
    categoriaId: "5",
    nome: "Marmitex Fit: Frango Grelhado e Batata Doce",
    tamanho: "Individual (400g)",
    preco: 21.0,
    descricao:
      "Opção leve e saudável. Filé de peito de frango grelhado sem óleo, acompanhado de purê de batata doce e um mix de legumes no vapor.",
    ingredientes: [
      "Peito de Frango",
      "Batata Doce",
      "Brócolis",
      "Cenoura",
      "Azeite",
      "Ervas Finas",
    ],
    avaliacao: 4.6,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "al6",
    categoriaId: "5",
    nome: "Escondidinho de Carne Seca",
    tamanho: "Individual (450g)",
    preco: 28.5,
    descricao:
      "Base de creme de mandioca (macaxeira) super macio, recheio farto de carne seca desfiada bem temperada e cobertura de queijo coalho gratinado.",
    ingredientes: [
      "Mandioca",
      "Carne Seca",
      "Queijo Coalho",
      "Manteiga de Garrafa",
      "Cebola Roxa",
    ],
    avaliacao: 4.8,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "al7",
    categoriaId: "5",
    nome: "Macarrão à Bolonhesa",
    tamanho: "Individual (500g)",
    preco: 23.9,
    descricao:
      "Espaguete grano duro cozido al dente, envolto em um rico e encorpado molho de tomate com carne moída selecionada. Acompanha queijo parmesão ralado.",
    ingredientes: [
      "Macarrão Espaguete",
      "Carne Moída",
      "Molho de Tomate",
      "Cebola",
      "Alho",
      "Queijo Parmesão",
    ],
    avaliacao: 4.7,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "al8",
    categoriaId: "5",
    nome: "Moqueca de Peixe e Camarão",
    tamanho: "Serve 2 pessoas (900g)",
    preco: 65.0,
    descricao:
      "Tradicional moqueca feita em panela de barro com postas de peixe branco, camarões médios, azeite de dendê e leite de coco. Acompanha arroz, pirão e farofa.",
    ingredientes: [
      "Peixe Branco",
      "Camarão",
      "Leite de Coco",
      "Azeite de Dendê",
      "Pimentão",
      "Arroz Branco",
      "Farinha de Mandioca",
    ],
    avaliacao: 4.9,
    tempoEntrega: "40-55 min",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "al9",
    categoriaId: "5",
    nome: "Churrasco Misto na Brasa",
    tamanho: "Individual (550g)",
    preco: 35.0,
    descricao:
      "Para os amantes de carne! Mix com picanha, linguiça toscana e sobrecoxa desossada assados na brasa. Acompanha arroz, feijão tropeiro e vinagrete.",
    ingredientes: [
      "Picanha",
      "Linguiça Toscana",
      "Sobrecoxa de Frango",
      "Arroz Branco",
      "Feijão Tropeiro",
      "Vinagrete",
    ],
    avaliacao: 5.0,
    tempoEntrega: "30-45 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "al10",
    categoriaId: "5",
    nome: "Frango Assado com Batatas Coradas",
    tamanho: "Meio Frango (Serve 2)",
    preco: 38.0,
    descricao:
      "Meio frango assado lentamente, garantindo pele dourada e carne suculenta. Acompanha batatas rústicas coradas no próprio molho, arroz e salada.",
    ingredientes: [
      "Frango",
      "Batata Rústica",
      "Alecrim",
      "Arroz Branco",
      "Alface",
      "Tomate",
    ],
    avaliacao: 4.6,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1609090820067-a5c5195f18a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf1",
    categoriaId: "6",
    nome: "Espresso Tradicional",
    tamanho: "50ml",
    preco: 6.5,
    descricao:
      "O autêntico café espresso italiano, extraído sob pressão para garantir um sabor intenso, encorpado e com aquela crema aveludada no topo.",
    ingredientes: ["Café Arábica Moído na Hora", "Água Filtrada"],
    avaliacao: 4.8,
    tempoEntrega: "10-15 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf2",
    categoriaId: "6",
    nome: "Cappuccino Italiano Clássico",
    tamanho: "200ml",
    preco: 12.9,
    descricao:
      "A harmonia perfeita entre uma dose de espresso, leite vaporizado cremoso e uma espessa camada de espuma de leite. Finalizado com cacau em pó.",
    ingredientes: [
      "Café Espresso",
      "Leite Integral Vaporizado",
      "Espuma de Leite",
      "Cacau em Pó",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf3",
    categoriaId: "6",
    nome: "Frappuccino de Caramelo",
    tamanho: "400ml",
    preco: 19.5,
    descricao:
      "Bebida gelada e refrescante batida com gelo! Mistura de café espresso, leite, xarope de caramelo, coberta com chantilly e muita calda.",
    ingredientes: [
      "Café Espresso",
      "Leite",
      "Gelo",
      "Xarope de Caramelo",
      "Chantilly",
      "Calda de Caramelo",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf4",
    categoriaId: "6",
    nome: "Croissant de Manteiga",
    tamanho: "Unidade (80g)",
    preco: 11.0,
    descricao:
      "Massa folhada francesa clássica, super leve, com interior aerado e casquinha dourada, assado com manteiga de primeira qualidade.",
    ingredientes: [
      "Farinha de Trigo",
      "Manteiga Extra",
      "Leite",
      "Açúcar",
      "Fermento",
    ],
    avaliacao: 4.7,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf5",
    categoriaId: "6",
    nome: "Bolo de Cenoura com Chocolate",
    tamanho: "Fatia (150g)",
    preco: 14.5,
    descricao:
      "Aquele bolo com gostinho de infância! Massa fofinha e úmida de cenoura com uma cobertura espessa e durinha de chocolate.",
    ingredientes: [
      "Cenoura",
      "Farinha de Trigo",
      "Ovos",
      "Óleo",
      "Açúcar",
      "Chocolate em Pó",
      "Manteiga",
    ],
    avaliacao: 4.9,
    tempoEntrega: "10-15 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf6",
    categoriaId: "6",
    nome: "Sanduíche Natural de Peito de Peru",
    tamanho: "Unidade (200g)",
    preco: 16.9,
    descricao:
      "Lanche leve montado no pão de forma integral, recheado com peito de peru defumado, creme de ricota temperado, cenoura ralada e alface.",
    ingredientes: [
      "Pão Integral",
      "Peito de Peru",
      "Creme de Ricota",
      "Cenoura",
      "Alface Americana",
    ],
    avaliacao: 4.6,
    tempoEntrega: "10-20 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf7",
    categoriaId: "6",
    nome: "Latte Macchiato",
    tamanho: "300ml",
    preco: 14.0,
    descricao:
      "Bebida suave que destaca o leite. Um copo farto de leite vaporizado manchado com uma dose curta de espresso, criando lindas camadas.",
    ingredientes: ["Leite Vaporizado", "Café Espresso Duplo"],
    avaliacao: 4.7,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf8",
    categoriaId: "6",
    nome: "Mocha de Chocolate Branco",
    tamanho: "300ml",
    preco: 17.5,
    descricao:
      "Bebida quente indulgente! Uma dose de espresso misturada com calda de chocolate branco derretido e leite vaporizado, finalizado com chantilly.",
    ingredientes: [
      "Café Espresso",
      "Calda de Chocolate Branco",
      "Leite Vaporizado",
      "Chantilly",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf9",
    categoriaId: "6",
    nome: "Tostada de Abacate (Avocado Toast)",
    tamanho: "Unidade (180g)",
    preco: 22.0,
    descricao:
      "Fatia de pão de fermentação natural tostado, coberto com pasta de abacate temperada com limão, azeite, pimenta preta e um ovo poché perfeito por cima.",
    ingredientes: [
      "Pão de Fermentação Natural",
      "Abacate",
      "Ovo",
      "Azeite",
      "Pimenta do Reino",
      "Limão",
    ],
    avaliacao: 4.8,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "caf10",
    categoriaId: "6",
    nome: "Empanada Argentina de Carne",
    tamanho: "Unidade (120g)",
    preco: 10.5,
    descricao:
      "Salgado assado de massa levemente folhada, recheado com carne bovina picada na faca, azeitonas, ovo cozido e temperos tradicionais argentinos.",
    ingredientes: [
      "Farinha de Trigo",
      "Carne Bovina",
      "Cebola",
      "Ovo Cozido",
      "Azeitona Verde",
      "Cominho",
    ],
    avaliacao: 4.7,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas1",
    categoriaId: "7",
    nome: "Espaguete à Bolonhesa",
    tamanho: "Individual (500g)",
    preco: 28.9,
    descricao:
      "O clássico italiano! Espaguete grano duro cozido al dente, servido com um farto molho de tomate artesanal e carne moída selecionada, finalizado com parmesão.",
    ingredientes: [
      "Massa Espaguete",
      "Carne Moída",
      "Molho de Tomate Artesanal",
      "Cebola",
      "Alho",
      "Queijo Parmesão Ralado",
    ],
    avaliacao: 4.8,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas2",
    categoriaId: "7",
    nome: "Lasanha Tradicional à Bolonhesa",
    tamanho: "Serve 2 pessoas (800g)",
    preco: 45.0,
    descricao:
      "Lasanha montada em camadas generosas de massa fresca, presunto, muito queijo muçarela e o nosso suculento molho bolonhesa caseiro. Gratinada ao forno.",
    ingredientes: [
      "Massa Fresca",
      "Carne Moída",
      "Molho de Tomate",
      "Presunto",
      "Queijo Muçarela",
      "Queijo Parmesão",
    ],
    avaliacao: 4.9,
    tempoEntrega: "35-50 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas3",
    categoriaId: "7",
    nome: "Penne ao Molho Branco com Frango",
    tamanho: "Individual (450g)",
    preco: 32.5,
    descricao:
      "Massa tipo penne envolta em um aveludado e cremoso molho bechamel (molho branco) com noz-moscada e tiras de peito de frango grelhado.",
    ingredientes: [
      "Massa Penne",
      "Peito de Frango",
      "Creme de Leite",
      "Leite",
      "Manteiga",
      "Noz-moscada",
    ],
    avaliacao: 4.7,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas4",
    categoriaId: "7",
    nome: "Nhoque de Batata ao Sugo",
    tamanho: "Individual (400g)",
    preco: 29.9,
    descricao:
      "Nhoques artesanais de batata, super macios que derretem na boca, cobertos com molho de tomate rústico (sugo) e manjericão fresco.",
    ingredientes: [
      "Batata",
      "Farinha de Trigo",
      "Ovos",
      "Tomates Pelados",
      "Manjericão",
      "Azeite",
    ],
    avaliacao: 4.8,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas5",
    categoriaId: "7",
    nome: "Espaguete Alho e Óleo com Bacon",
    tamanho: "Individual (400g)",
    preco: 25.0,
    descricao:
      "Simples, perfumado e delicioso. Espaguete salteado no azeite extravirgem com lâminas de alho douradas, pimenta calabresa e cubos de bacon crocante.",
    ingredientes: [
      "Massa Espaguete",
      "Alho",
      "Azeite Extravirgem",
      "Bacon em Cubos",
      "Pimenta Calabresa",
      "Salsinha",
    ],
    avaliacao: 4.6,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas6",
    categoriaId: "7",
    nome: "Fettuccine Alfredo",
    tamanho: "Individual (450g)",
    preco: 36.9,
    descricao:
      "A verdadeira receita romana. Massa longa e achatada envolta em uma emulsão rica e muito cremosa de manteiga e muito queijo parmesão fresco.",
    ingredientes: [
      "Massa Fettuccine",
      "Manteiga Extra",
      "Queijo Parmesão Ralado na Hora",
      "Pimenta do Reino",
    ],
    avaliacao: 4.9,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas7",
    categoriaId: "7",
    nome: "Ravioli de Ricota e Espinafre",
    tamanho: "Individual (400g)",
    preco: 34.0,
    descricao:
      "Pequenos pastéis de massa fresca recheados com uma mistura suave de ricota temperada e espinafre, servidos com molho de manteiga e sálvia.",
    ingredientes: [
      "Massa Fresca",
      "Ricota",
      "Espinafre",
      "Manteiga",
      "Folhas de Sálvia",
      "Parmesão",
    ],
    avaliacao: 4.8,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas8",
    categoriaId: "7",
    nome: "Lasanha Quatro Queijos",
    tamanho: "Serve 2 pessoas (800g)",
    preco: 48.0,
    descricao:
      "Para os apaixonados por queijo. Massa fresca intercalada com molho branco e um blend perfeito de muçarela, provolone, gorgonzola e parmesão.",
    ingredientes: [
      "Massa Fresca",
      "Molho Branco",
      "Queijo Muçarela",
      "Queijo Provolone",
      "Queijo Gorgonzola",
      "Queijo Parmesão",
    ],
    avaliacao: 5.0,
    tempoEntrega: "35-50 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas9",
    categoriaId: "7",
    nome: "Macarrão de Forno Gratinado",
    tamanho: "Serve 2 pessoas (700g)",
    preco: 38.5,
    descricao:
      "O famoso 'Mac and Cheese' abrasileirado. Massa curta tipo parafuso misturada com presunto, requeijão e molho de tomate, coberta de queijo e gratinada.",
    ingredientes: [
      "Massa Parafuso (Fusilli)",
      "Presunto",
      "Requeijão",
      "Molho de Tomate",
      "Queijo Muçarela",
    ],
    avaliacao: 4.7,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mas10",
    categoriaId: "7",
    nome: "Canelone Recheado com Frango e Catupiry",
    tamanho: "Individual (450g)",
    preco: 35.0,
    descricao:
      "Cilindros de massa fresca recheados com frango desfiado muito bem temperado e o verdadeiro Catupiry, servidos ao molho rosé.",
    ingredientes: [
      "Massa Fresca",
      "Frango Desfiado",
      "Requeijão Catupiry",
      "Molho de Tomate",
      "Creme de Leite",
      "Queijo Gratinado",
    ],
    avaliacao: 4.9,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sc1",
    categoriaId: "8",
    nome: "Caldo Verde Tradicional",
    tamanho: "500ml",
    preco: 18.9,
    descricao:
      "O clássico que aquece o coração! Caldo espesso à base de batatas, com couve manteiga fininha e rodelas de linguiça calabresa defumada. Acompanha pão francês.",
    ingredientes: [
      "Batata",
      "Couve Manteiga",
      "Linguiça Calabresa",
      "Alho",
      "Azeite",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "sc2",
    categoriaId: "8",
    nome: "Caldo de Feijão com Bacon",
    tamanho: "500ml",
    preco: 16.5,
    descricao:
      "Caldo de feijão carioca super temperado, batido e peneirado, servido com cubos de bacon crocante e cebolinha fresca. Acompanha torradas de alho.",
    ingredientes: [
      "Feijão Carioca",
      "Bacon",
      "Alho",
      "Cebola",
      "Cebolinha",
      "Louro",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "sc3",
    categoriaId: "8",
    nome: "Creme de Abóbora com Carne Seca",
    tamanho: "500ml",
    preco: 22.0,
    descricao:
      "Combinação perfeita! Creme aveludado de abóbora cabotiá com um toque de gengibre, recheado com carne seca desfiada e catupiry.",
    ingredientes: [
      "Abóbora Cabotiá",
      "Carne Seca",
      "Requeijão Catupiry",
      "Creme de Leite",
      "Gengibre",
      "Cebola Roxa",
    ],
    avaliacao: 4.9,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "sc4",
    categoriaId: "8",
    nome: "Sopa de Mandioca (Caldo de Quenga)",
    tamanho: "500ml",
    preco: 19.9,
    descricao:
      "Caldo rústico e muito saboroso feito com mandioca derretendo, frango desfiado, bacon, milho verde e temperos frescos.",
    ingredientes: [
      "Mandioca",
      "Peito de Frango",
      "Bacon",
      "Milho Verde",
      "Cheiro Verde",
      "Colorau",
    ],
    avaliacao: 4.7,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "sc5",
    categoriaId: "8",
    nome: "Canja de Galinha da Vó",
    tamanho: "500ml",
    preco: 17.5,
    descricao:
      "A autêntica comida que abraça. Caldo leve e nutritivo com pedaços de frango, arroz, cenoura, batata e salsinha fresca.",
    ingredientes: [
      "Frango",
      "Arroz Branco",
      "Cenoura",
      "Batata",
      "Salsinha",
      "Cebola",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "sc6",
    categoriaId: "8",
    nome: "Creme de Queijo no Pão Italiano",
    tamanho: "Serve 1 a 2 pessoas",
    preco: 38.0,
    descricao:
      "Experiência premium. Um creme espesso e rico feito com um blend de 4 queijos, servido dentro de um pão italiano redondo e crocante, que serve como prato.",
    ingredientes: [
      "Pão Italiano",
      "Queijo Gorgonzola",
      "Queijo Provolone",
      "Queijo Muçarela",
      "Parmesão",
      "Creme de Leite Fresco",
    ],
    avaliacao: 5.0,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "sc7",
    categoriaId: "8",
    nome: "Caldo de Mocotó Tradicional",
    tamanho: "500ml",
    preco: 24.9,
    descricao:
      "Caldo forte e cheio de energia! Preparado lentamente com mocotó bovino, fava, pedaços de linguiça e temperos marcantes. Acompanha farinha de mandioca e pimenta.",
    ingredientes: [
      "Mocotó Bovino",
      "Fava Branca",
      "Linguiça Calabresa",
      "Tomate",
      "Pimentão",
      "Coentro",
    ],
    avaliacao: 4.6,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "sc8",
    categoriaId: "8",
    nome: "Sopa de Cebola Francesa Gratinada",
    tamanho: "400ml",
    preco: 28.0,
    descricao:
      "Um clássico da culinária francesa. Caldo de carne encorpado com cebolas caramelizadas, coberto com uma fatia de pão tostado e queijo gruyère gratinado.",
    ingredientes: [
      "Cebola",
      "Caldo de Carne Bovino",
      "Vinho Branco",
      "Pão de Fermentação Natural",
      "Queijo Gruyère",
      "Manteiga",
    ],
    avaliacao: 4.9,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "sc9",
    categoriaId: "8",
    nome: "Creme de Ervilha com Bacon",
    tamanho: "500ml",
    preco: 18.5,
    descricao:
      "Creme liso e consistente de ervilhas partidas, temperado com alho e servido com uma farta cobertura de bacon em cubinhos. Acompanha croutons.",
    ingredientes: [
      "Ervilha Partida seca",
      "Bacon",
      "Cebola",
      "Alho",
      "Azeite",
      "Croutons",
    ],
    avaliacao: 4.7,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "sc10",
    categoriaId: "8",
    nome: "Sopa de Legumes com Músculo",
    tamanho: "500ml",
    preco: 21.0,
    descricao:
      "Leve e super nutritiva. Pedaços macios de carne de músculo cozidos com um mix de legumes variados cortados em cubos em um caldo muito saboroso.",
    ingredientes: [
      "Carne (Músculo Bovino)",
      "Batata",
      "Cenoura",
      "Chuchu",
      "Abobrinha",
      "Macarrão Argolinha",
    ],
    avaliacao: 4.8,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "h1",
    categoriaId: "9",
    nome: "Cheeseburger Clássico",
    tamanho: "Blend 150g",
    preco: 24.9,
    descricao:
      "O clássico que nunca erra. Blend de carne bovina suculenta (150g), dupla fatia de queijo cheddar derretido e nossa maionese verde artesanal no pão brioche tostado na manteiga.",
    ingredientes: [
      "Pão Brioche",
      "Blend Bovino 150g",
      "Queijo Cheddar",
      "Maionese Verde Artesanal",
    ],
    avaliacao: 4.8,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "h2",
    categoriaId: "9",
    nome: "Bacon Premium Artesanal",
    tamanho: "Blend 160g",
    preco: 32.5,
    descricao:
      "Para os amantes de bacon! Blend bovino, fatias grossas e crocantes de bacon defumado, queijo cheddar, cebola caramelizada e molho barbecue no pão australiano.",
    ingredientes: [
      "Pão Australiano",
      "Blend Bovino 160g",
      "Bacon Defumado",
      "Queijo Cheddar",
      "Cebola Caramelizada",
      "Molho Barbecue",
    ],
    avaliacao: 4.9,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "h3",
    categoriaId: "9",
    nome: "Smash Burger Duplo",
    tamanho: "2x 80g",
    preco: 28.9,
    descricao:
      "Muito mais crosta e sabor! Dois discos finos de carne prensados na chapa (smash), queijo american cheese derretido em dobro, picles e molho especial no pão de hambúrguer macio.",
    ingredientes: [
      "Pão de Hambúrguer",
      "2x Carnes Smash 80g",
      "American Cheese",
      "Picles",
      "Molho Especial (Smash)",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "h4",
    categoriaId: "9",
    nome: "Chicken Crispy Supremo",
    tamanho: "Filé 150g",
    preco: 26.0,
    descricao:
      "Sobrecoxa de frango desossada, empanada com uma casquinha super crocante e picante, acompanhada de alface americana, tomate e maionese de bacon no pão brioche.",
    ingredientes: [
      "Pão Brioche",
      "Sobrecoxa Empanada Frita",
      "Alface Americana",
      "Tomate",
      "Maionese de Bacon",
    ],
    avaliacao: 4.7,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "h5",
    categoriaId: "9",
    nome: "X-Tudo da Casa",
    tamanho: "Tradicional",
    preco: 35.0,
    descricao:
      "O verdadeiro 'podrão' com toque artesanal. Blend bovino 150g, ovo frito com gema mole, bacon, presunto, queijo muçarela, alface, tomate, milho e batata palha.",
    ingredientes: [
      "Pão de Hambúrguer",
      "Blend 150g",
      "Ovo",
      "Bacon",
      "Presunto",
      "Queijo Muçarela",
      "Salada",
      "Batata Palha",
      "Milho",
    ],
    avaliacao: 4.8,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "h6",
    categoriaId: "9",
    nome: "Futuro Veggie Burger",
    tamanho: "Blend Vegetal 115g",
    preco: 31.9,
    descricao:
      "100% à base de plantas, mas com sabor e textura incríveis! Hambúrguer vegetal da Fazenda do Futuro, queijo prato vegano derretido, cebola roxa e rúcula fresca.",
    ingredientes: [
      "Pão Vegano",
      "Hambúrguer de Plantas (Futuro)",
      "Queijo Vegano Derretido",
      "Cebola Roxa",
      "Rúcula",
      "Maionese Vegana",
    ],
    avaliacao: 4.6,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "h7",
    categoriaId: "9",
    nome: "Gorgonzola & Crispy Onion",
    tamanho: "Blend 160g",
    preco: 34.0,
    descricao:
      "Sabor marcante. Blend bovino coberto por um creme aveludado de queijo gorgonzola, rúcula fresca e uma generosa porção de cebola crispy super crocante.",
    ingredientes: [
      "Pão Brioche",
      "Blend Bovino 160g",
      "Creme de Gorgonzola",
      "Cebola Crispy (Empanada)",
      "Rúcula",
    ],
    avaliacao: 4.7,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "h8",
    categoriaId: "9",
    nome: "Costela na Brasa",
    tamanho: "Blend de Costela 180g",
    preco: 36.5,
    descricao:
      "Hambúrguer alto feito 100% com costela bovina, assado na churrasqueira com gostinho de fumaça. Acompanha queijo provolone maçaricado e molho chimichurri.",
    ingredientes: [
      "Pão Francês Redondo",
      "Blend de Costela 180g",
      "Queijo Provolone",
      "Molho Chimichurri",
      "Maionese de Alho Assado",
    ],
    avaliacao: 4.9,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "h9",
    categoriaId: "9",
    nome: "Piscina de Cheddar Melt",
    tamanho: "Blend 160g",
    preco: 33.9,
    descricao:
      "Para se sujar inteiro! Blend bovino mergulhado em uma verdadeira piscina de creme de cheddar quentinho e cebolas caramelizadas no shoyu.",
    ingredientes: [
      "Pão Australiano",
      "Blend Bovino 160g",
      "Creme de Cheddar (Muito Cheddar)",
      "Cebola no Shoyu",
    ],
    avaliacao: 4.8,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "h10",
    categoriaId: "9",
    nome: "Monster Triplo",
    tamanho: "3x 150g (450g de carne)",
    preco: 49.9,
    descricao:
      "Apenas para os fortes. Três blends bovinos suculentos, tripla camada de queijo prato, muito bacon, anéis de cebola empanados e maionese defumada no pão brioche.",
    ingredientes: [
      "Pão Brioche",
      "3x Blends Bovinos (450g total)",
      "Queijo Prato",
      "Bacon em Tiras",
      "Onion Rings",
      "Maionese Defumada",
    ],
    avaliacao: 5.0,
    tempoEntrega: "35-45 min",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "piz1",
    categoriaId: "10",
    nome: "Pizza de Calabresa Tradicional",
    tamanho: "Grande (8 Fatias)",
    preco: 45.9,
    descricao:
      "A campeã de vendas! Fartas rodelas de linguiça calabresa defumada, rodelas de cebola fresca, azeitonas pretas e orégano sobre base de muçarela.",
    ingredientes: [
      "Massa de Longa Fermentação",
      "Molho de Tomate Artesanal",
      "Queijo Muçarela",
      "Linguiça Calabresa",
      "Cebola",
      "Azeitona Preta",
    ],
    avaliacao: 4.8,
    tempoEntrega: "40-50 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "piz2",
    categoriaId: "10",
    nome: "Pizza Margherita",
    tamanho: "Grande (8 Fatias)",
    preco: 42.0,
    descricao:
      "Um clássico italiano. Molho de tomate pelado, fatias grossas de muçarela de búfala, rodelas de tomate fresco e folhas de manjericão gigante.",
    ingredientes: [
      "Massa de Longa Fermentação",
      "Molho de Tomate Pelado",
      "Muçarela de Búfala",
      "Tomate Fresco",
      "Manjericão Fresco",
    ],
    avaliacao: 4.9,
    tempoEntrega: "35-45 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "piz3",
    categoriaId: "10",
    nome: "Pizza Frango com Catupiry",
    tamanho: "Grande (8 Fatias)",
    preco: 49.9,
    descricao:
      "A combinação perfeita! Peito de frango desfiado e temperado com ervas, coberto por uma generosa camada do autêntico requeijão Catupiry gratinado.",
    ingredientes: [
      "Molho de Tomate",
      "Queijo Muçarela",
      "Frango Desfiado",
      "Requeijão Catupiry",
      "Orégano",
    ],
    avaliacao: 4.9,
    tempoEntrega: "40-50 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "piz4",
    categoriaId: "10",
    nome: "Pizza Portuguesa",
    tamanho: "Grande (8 Fatias)",
    preco: 52.0,
    descricao:
      "Muito bem recheada. Presunto cozido, ovos fatiados, cebola, ervilhas, azeitonas verdes e cobertura de queijo muçarela derretido.",
    ingredientes: [
      "Molho de Tomate",
      "Queijo Muçarela",
      "Presunto",
      "Ovo Cozido",
      "Cebola",
      "Ervilha",
      "Azeitona Verde",
    ],
    avaliacao: 4.7,
    tempoEntrega: "40-50 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "piz5",
    categoriaId: "10",
    nome: "Pizza Quatro Queijos",
    tamanho: "Grande (8 Fatias)",
    preco: 55.0,
    descricao:
      "Para os amantes de queijo. Um blend derretido de muçarela, provolone defumado, gorgonzola marcante e parmesão ralado na hora.",
    ingredientes: [
      "Molho de Tomate",
      "Queijo Muçarela",
      "Queijo Provolone",
      "Queijo Gorgonzola",
      "Queijo Parmesão",
    ],
    avaliacao: 4.8,
    tempoEntrega: "40-50 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "piz6",
    categoriaId: "10",
    nome: "Pizza Pepperoni",
    tamanho: "Média (6 Fatias)",
    preco: 44.9,
    descricao:
      "Estilo nova-iorquino. Cobertura dupla de queijo muçarela e fatias de pepperoni levemente apimentado que ficam com as bordas crocantes no forno.",
    ingredientes: [
      "Massa Fina",
      "Molho de Tomate Artesanal",
      "Queijo Muçarela",
      "Salame Pepperoni",
    ],
    avaliacao: 4.9,
    tempoEntrega: "35-45 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "piz7",
    categoriaId: "10",
    nome: "Pizza Nordestina (Carne Seca)",
    tamanho: "Grande (8 Fatias)",
    preco: 58.0,
    descricao:
      "Sabor marcante! Carne seca desfiada e puxada na manteiga de garrafa, coberta com fatias de queijo coalho e anéis de cebola roxa.",
    ingredientes: [
      "Molho de Tomate",
      "Queijo Muçarela",
      "Carne Seca",
      "Queijo Coalho",
      "Cebola Roxa",
      "Manteiga de Garrafa",
    ],
    avaliacao: 4.8,
    tempoEntrega: "40-55 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "piz8",
    categoriaId: "10",
    nome: "Pizza Rúcula com Tomate Seco",
    tamanho: "Média (6 Fatias)",
    preco: 46.5,
    descricao:
      "Opção mais leve e sofisticada. Muçarela de búfala derretida, tomates secos artesanais em conserva e folhas frescas de rúcula adicionadas após o forno.",
    ingredientes: [
      "Molho de Tomate",
      "Muçarela de Búfala",
      "Tomate Seco",
      "Rúcula Fresca",
      "Azeite Extravirgem",
    ],
    avaliacao: 4.6,
    tempoEntrega: "35-45 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "piz9",
    categoriaId: "10",
    nome: "Pizza Moda da Casa",
    tamanho: "Grande (8 Fatias)",
    preco: 62.0,
    descricao:
      "A especialidade do nosso pizzaiolo! Lombo canadense, bacon crocante, champignon fatiado, palmito pupunha e uma farta camada de muçarela.",
    ingredientes: [
      "Molho de Tomate",
      "Queijo Muçarela",
      "Lombo Canadense",
      "Bacon",
      "Champignon",
      "Palmito",
      "Orégano",
    ],
    avaliacao: 4.7,
    tempoEntrega: "45-55 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "piz10",
    categoriaId: "10",
    nome: "Pizza Doce: Chocolate com Morango",
    tamanho: "Média (6 Fatias)",
    preco: 42.0,
    descricao:
      "Para fechar com chave de ouro. Massa assada em branco, coberta com uma generosa camada de chocolate ao leite derretido e fatias de morangos frescos.",
    ingredientes: [
      "Massa de Pizza",
      "Chocolate ao Leite Derretido",
      "Morangos Frescos",
      "Leite Condensado",
    ],
    avaliacao: 4.9,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau1",
    categoriaId: "11",
    nome: "Salada Caesar com Frango Grelhado",
    tamanho: "Porção (400g)",
    preco: 26.9,
    descricao:
      "A clássica e leve! Mix de folhas verdes crocantes, tiras de peito de frango grelhado sem óleo, croutons integrais, lascas de parmesão e molho Caesar à parte.",
    ingredientes: [
      "Alface Americana",
      "Alface Crespa",
      "Peito de Frango",
      "Croutons Integrais",
      "Queijo Parmesão",
      "Molho Caesar Fit",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau2",
    categoriaId: "11",
    nome: "Bowl de Salmão e Quinoa",
    tamanho: "Individual (450g)",
    preco: 38.5,
    descricao:
      "Nutrição completa em um bowl. Cubos de salmão fresco maçaricado, base de quinoa real, abacate, edamame, tomate cereja e molho tarê com baixo teor de sódio.",
    ingredientes: [
      "Salmão",
      "Quinoa",
      "Abacate",
      "Edamame",
      "Tomate Cereja",
      "Gergelim",
      "Molho Tarê Light",
    ],
    avaliacao: 4.9,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau3",
    categoriaId: "11",
    nome: "Espaguete de Abobrinha à Bolonhesa de Lentilha",
    tamanho: "Individual (400g)",
    preco: 24.0,
    descricao:
      "Opção Low Carb e Vegana! Fios de abobrinha salteados no azeite, cobertos com um rico e nutritivo molho bolonhesa feito à base de lentilhas e tomates frescos.",
    ingredientes: [
      "Abobrinha Italiana",
      "Lentilha",
      "Molho de Tomate Natural",
      "Cebola",
      "Alho",
      "Manjericão",
    ],
    avaliacao: 4.7,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau4",
    categoriaId: "11",
    nome: "Wrap Integral de Peito de Peru",
    tamanho: "Unidade (250g)",
    preco: 19.9,
    descricao:
      "Lanche rápido e leve. Massa fininha 100% integral recheada com fatias de peito de peru, creme de ricota, cenoura ralada e mix de folhas.",
    ingredientes: [
      "Massa de Wrap Integral",
      "Peito de Peru Defumado",
      "Creme de Ricota",
      "Cenoura",
      "Rúcula",
      "Alface",
    ],
    avaliacao: 4.6,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau5",
    categoriaId: "11",
    nome: "Tapioca de Frango com Creme de Ricota",
    tamanho: "Unidade (200g)",
    preco: 16.5,
    descricao:
      "Clássico brasileiro sem glúten. Goma de tapioca hidratada recheada com frango desfiado temperado com ervas finas e creme de ricota light.",
    ingredientes: [
      "Goma de Tapioca",
      "Frango Desfiado",
      "Creme de Ricota Light",
      "Ervas Finas",
      "Salsinha",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau6",
    categoriaId: "11",
    nome: "Omelete Fit de Espinafre e Cogumelos",
    tamanho: "Individual (300g)",
    preco: 21.0,
    descricao:
      "Foco nas proteínas! Omelete feito com 3 ovos (sendo 2 claras), recheado com espinafre fresco, cogumelos Paris salteados e queijo branco derretido.",
    ingredientes: [
      "Ovos",
      "Claras de Ovo",
      "Espinafre",
      "Cogumelos Paris",
      "Queijo Minas Frescal",
      "Azeite",
    ],
    avaliacao: 4.7,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau7",
    categoriaId: "11",
    nome: "Salada de Grão-de-Bico com Atum",
    tamanho: "Porção (350g)",
    preco: 23.5,
    descricao:
      "Rica em fibras e ômega 3. Grão-de-bico macio, pedaços de atum sólido em água, tomate cereja, cebola roxa, azeitonas e azeite extravirgem.",
    ingredientes: [
      "Grão-de-Bico",
      "Atum Sólido",
      "Tomate Cereja",
      "Cebola Roxa",
      "Azeitona Preta",
      "Azeite Extravirgem",
      "Limão",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau8",
    categoriaId: "11",
    nome: "Poke Havaiano Vegano",
    tamanho: "Individual (450g)",
    preco: 32.9,
    descricao:
      "Refrescante e colorido. Base de arroz japonês temperado, cubos de tofu marinado, manga, pepino, cenoura ralada, cebolinha e chips de batata doce.",
    ingredientes: [
      "Arroz Japonês",
      "Tofu Marinado",
      "Manga",
      "Pepino (Sunomono)",
      "Cenoura",
      "Chips de Batata Doce",
      "Molho Shoyu Light",
    ],
    avaliacao: 4.8,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau9",
    categoriaId: "11",
    nome: "Sanduíche Natural Sem Glúten",
    tamanho: "Unidade (200g)",
    preco: 18.0,
    descricao:
      "Leveza total. Pão de forma artesanal sem glúten recheado com pasta de frango com maionese vegana, milho e folhas verdes.",
    ingredientes: [
      "Pão Sem Glúten",
      "Frango Desfiado",
      "Maionese Vegana",
      "Milho Verde",
      "Alface",
    ],
    avaliacao: 4.6,
    tempoEntrega: "15-20 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "sau10",
    categoriaId: "11",
    nome: "Panqueca Doce Fit (Aveia e Banana)",
    tamanho: "Porção (2 unidades)",
    preco: 15.5,
    descricao:
      "Para matar a vontade de doce sem sair da dieta. Massa feita com aveia em flocos e banana, recheada com pasta de amendoim e um fio de mel.",
    ingredientes: [
      "Aveia",
      "Banana",
      "Ovos",
      "Canela em Pó",
      "Pasta de Amendoim",
      "Mel",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
  },
  {
    id: "chu1",
    categoriaId: "12",
    nome: "Picanha Premium na Brasa",
    tamanho: "Serve 2 pessoas (500g)",
    preco: 79.9,
    descricao:
      "A rainha do churrasco! Picanha com capa de gordura perfeita, assada na brasa com sal grosso. Acompanha arroz, farofa, vinagrete e batata frita.",
    ingredientes: [
      "Picanha Bovina",
      "Arroz Branco",
      "Farofa de Ovos",
      "Vinagrete",
      "Batata Frita",
    ],
    avaliacao: 4.9,
    tempoEntrega: "40-50 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "chu2",
    categoriaId: "12",
    nome: "Costela Bovina no Bafo",
    tamanho: "Serve 3 pessoas (800g)",
    preco: 89.0,
    descricao:
      "Costela bovina assada lentamente no bafo por 12 horas, carne desmanchando na boca. Servida com mandioca na manteiga de garrafa e arroz biro-biro.",
    ingredientes: [
      "Costela Bovina",
      "Mandioca",
      "Manteiga de Garrafa",
      "Arroz Biro-Biro",
    ],
    avaliacao: 4.8,
    tempoEntrega: "45-60 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "chu3",
    categoriaId: "12",
    nome: "Bife Ancho Angus",
    tamanho: "Individual (350g)",
    preco: 65.0,
    descricao:
      "Corte nobre retirado da parte dianteira do contrafilé, com alto grau de marmoreio. Muito suculento, assado na parrilla. Acompanha risoto de parmesão.",
    ingredientes: [
      "Bife Ancho Angus",
      "Arroz Arbório",
      "Queijo Parmesão",
      "Manteiga",
      "Vinho Branco",
    ],
    avaliacao: 5.0,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "chu4",
    categoriaId: "12",
    nome: "Fraldinha na Mostarda",
    tamanho: "Serve 2 pessoas (500g)",
    preco: 62.9,
    descricao:
      "Peça de fraldinha macia e com pouca gordura, marinada e assada com uma crosta de mostarda com mel. Acompanha purê de batatas rústico e salada.",
    ingredientes: [
      "Fraldinha Bovina",
      "Mostarda Dijon",
      "Mel",
      "Purê de Batata Rústico",
      "Salada Verde",
    ],
    avaliacao: 4.7,
    tempoEntrega: "35-45 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "chu5",
    categoriaId: "12",
    nome: "Pão de Alho com Queijo",
    tamanho: "Porção (4 unidades)",
    preco: 22.0,
    descricao:
      "O aperitivo clássico do churrasco brasileiro. Pão baguete crocante recheado com um creme de alho suave, coberto com muito queijo muçarela gratinado na brasa.",
    ingredientes: [
      "Pão Baguete",
      "Creme de Alho Artesanal",
      "Queijo Muçarela",
      "Salsinha",
    ],
    avaliacao: 4.9,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "chu6",
    categoriaId: "12",
    nome: "Porção de Coração de Frango",
    tamanho: "Porção (400g)",
    preco: 35.0,
    descricao:
      "Coraçõezinhos de frango temperados na cerveja com um toque de alho e shoyu, assados no espeto na brasa. Acompanha farofa de bacon e vinagrete.",
    ingredientes: [
      "Coração de Frango",
      "Shoyu",
      "Alho",
      "Farofa de Bacon",
      "Vinagrete",
    ],
    avaliacao: 4.8,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "chu7",
    categoriaId: "12",
    nome: "Cupim Casqueirado",
    tamanho: "Serve 2 pessoas (450g)",
    preco: 58.5,
    descricao:
      "As lascas mais suculentas do cupim bovino, assado na churrasqueira e servido bem douradinho. Acompanha mandioca frita, maionese da casa e molho chimichurri.",
    ingredientes: [
      "Cupim Bovino",
      "Mandioca Frita",
      "Maionese Artesanal",
      "Molho Chimichurri",
    ],
    avaliacao: 4.9,
    tempoEntrega: "40-50 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "chu8",
    categoriaId: "12",
    nome: "Linguiça Toscana Artesanal",
    tamanho: "Porção (500g)",
    preco: 38.0,
    descricao:
      "Gomos de linguiça toscana artesanal levemente apimentada, assada na brasa até a casquinha ficar bem crocante. Acompanha fatias de pão de alho e farofa tradicional.",
    ingredientes: [
      "Linguiça Toscana",
      "Pimenta Dedo-de-Moça",
      "Pão de Alho",
      "Farofa de Mandioca",
    ],
    avaliacao: 4.7,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "chu9",
    categoriaId: "12",
    nome: "Maminha Fatiada com Queijo Coalho",
    tamanho: "Serve 2 pessoas (500g)",
    preco: 68.0,
    descricao:
      "Maminha super macia assada na grelha, servida em fatias finas, acompanhada de generosos pedaços de queijo coalho tostado com fios de melaço de cana.",
    ingredientes: [
      "Maminha Bovina",
      "Queijo Coalho",
      "Melaço de Cana",
      "Arroz Branco",
      "Farofa de Ovos",
    ],
    avaliacao: 4.8,
    tempoEntrega: "35-45 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "chu10",
    categoriaId: "12",
    nome: "T-Bone Steak na Parrilla",
    tamanho: "Individual (450g)",
    preco: 75.0,
    descricao:
      "O corte que une o melhor dos dois mundos: de um lado o saboroso contrafilé, do outro o macio filé mignon, separados pelo osso. Acompanha batatas rústicas com alecrim.",
    ingredientes: [
      "T-Bone Steak (Mignon e Contrafilé)",
      "Batata Rústica",
      "Alecrim",
      "Sal de Parrilla",
      "Molho Chimichurri",
    ],
    avaliacao: 5.0,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    id: "hd1",
    categoriaId: "13",
    nome: "Cachorro-Quente Tradicional",
    tamanho: "Pão de 15cm",
    preco: 14.9,
    descricao:
      "O clássico das ruas! Pão careca macio, uma salsicha cozida no molho de tomate artesanal, milho verde, ervilha, maionese da casa e muita batata palha.",
    ingredientes: [
      "Pão de Hot Dog",
      "1 Salsicha",
      "Molho de Tomate",
      "Milho",
      "Ervilha",
      "Maionese Artesanal",
      "Batata Palha",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "hd2",
    categoriaId: "13",
    nome: "Hot Dog Prensado Paulista",
    tamanho: "Pão de 20cm",
    preco: 19.5,
    descricao:
      "O verdadeiro podrão prensado! Pão grande tostado na chapa, duas salsichas, muito purê de batata temperado, vinagrete, requeijão e batata palha.",
    ingredientes: [
      "Pão de Hot Dog",
      "2 Salsichas",
      "Purê de Batata",
      "Vinagrete",
      "Requeijão Catupiry",
      "Batata Palha",
      "Mostarda",
    ],
    avaliacao: 4.9,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "hd3",
    categoriaId: "13",
    nome: "Dogão Cheddar & Bacon",
    tamanho: "Pão de 20cm",
    preco: 22.0,
    descricao:
      "Para os amantes de bacon. Pão fofinho, duas salsichas grelhadas, uma farta camada de creme de cheddar original e cubos de bacon bem crocantes.",
    ingredientes: [
      "Pão de Hot Dog",
      "2 Salsichas Grelhadas",
      "Creme de Cheddar",
      "Bacon em Cubos",
      "Cebola Caramelizada",
    ],
    avaliacao: 4.8,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "hd4",
    categoriaId: "13",
    nome: "Chili Dog Americano",
    tamanho: "Pão de 15cm",
    preco: 24.5,
    descricao:
      "Inspirado nas lanchonetes americanas. Salsicha tipo Viena, coberta com um delicioso chili de carne levemente apimentado e queijo cheddar ralado derretido.",
    ingredientes: [
      "Pão de Hot Dog",
      "Salsicha Viena",
      "Chili com Carne",
      "Queijo Cheddar Ralado",
      "Jalapeño (Opcional)",
    ],
    avaliacao: 4.7,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "hd5",
    categoriaId: "13",
    nome: "Hot Dog Frango com Catupiry",
    tamanho: "Pão de 20cm",
    preco: 21.0,
    descricao:
      "Super bem recheado! Salsicha no molho de tomate coberta por uma porção generosa de peito de frango desfiado temperadinho e o autêntico requeijão Catupiry.",
    ingredientes: [
      "Pão de Hot Dog",
      "1 Salsicha",
      "Frango Desfiado",
      "Requeijão Catupiry",
      "Milho Verde",
      "Batata Palha",
    ],
    avaliacao: 4.9,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "hd6",
    categoriaId: "13",
    nome: "Cachorro-Quente no Prato",
    tamanho: "Serve 2 (Gigante)",
    preco: 35.0,
    descricao:
      "Tão grande que não dá para comer com as mãos! Montado aberto no prato com 3 salsichas, purê de batata, presunto, queijo, ovo, bacon, milho e muita batata palha.",
    ingredientes: [
      "Pão de Hot Dog Aberto",
      "3 Salsichas",
      "Purê de Batata",
      "Presunto",
      "Queijo Muçarela",
      "Ovo Frito",
      "Bacon",
      "Batata Palha",
    ],
    avaliacao: 5.0,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "hd7",
    categoriaId: "13",
    nome: "Hot Dog Vegano",
    tamanho: "Pão de 15cm",
    preco: 23.9,
    descricao:
      "100% livre de crueldade animal. Pão vegano macio, salsicha à base de soja e ervilha, purê de batata no azeite, milho, vinagrete e maionese de alho vegana.",
    ingredientes: [
      "Pão Vegano",
      "Salsicha Vegetal",
      "Purê de Batata (Sem Leite)",
      "Milho",
      "Vinagrete",
      "Maionese Vegana",
      "Batata Palha Extra Fina",
    ],
    avaliacao: 4.6,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "hd8",
    categoriaId: "13",
    nome: "Dogão de Calabresa Acebolada",
    tamanho: "Pão de 20cm",
    preco: 22.5,
    descricao:
      "Substituímos a salsicha por muita linguiça calabresa fatiada fininha e salteada na chapa com rodelas de cebola, cobertas com queijo muçarela derretido.",
    ingredientes: [
      "Pão de Hot Dog",
      "Linguiça Calabresa Fatiada",
      "Cebola na Chapa",
      "Queijo Muçarela",
      "Maionese Especial",
    ],
    avaliacao: 4.8,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "hd9",
    categoriaId: "13",
    nome: "Cachorro-Quente de Forno",
    tamanho: "Pedaço (250g)",
    preco: 16.0,
    descricao:
      "Receita de família! Massa fofinha de liquidificador assada no forno com recheio cremoso de salsicha, molho de tomate, requeijão e cobertura de queijo ralado.",
    ingredientes: [
      "Massa de Liquidificador",
      "Salsicha",
      "Molho de Tomate",
      "Requeijão",
      "Cebola",
      "Queijo Parmesão Gratinado",
    ],
    avaliacao: 4.7,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "hd10",
    categoriaId: "13",
    nome: "Mini Dog de Festa",
    tamanho: "Porção (6 unidades)",
    preco: 25.0,
    descricao:
      "Para dividir ou matar a vontade. Seis mini cachorros-quentes clássicos montados em pãezinhos macios, com meia salsicha, molho de tomate e batata palha.",
    ingredientes: [
      "Mini Pão de Hot Dog",
      "Salsicha (Metade)",
      "Molho de Tomate",
      "Maionese",
      "Batata Palha",
    ],
    avaliacao: 4.9,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap1",
    categoriaId: "14",
    nome: "Combinado de Salmão (20 peças)",
    tamanho: "Serve 1 pessoa",
    preco: 65.0,
    descricao:
      "O queridinho do delivery! Um mix perfeito contendo 5 sashimis, 5 niguiris, 5 uramakis filadélfia e 5 hossamakis de salmão fresco.",
    ingredientes: [
      "Salmão Fresco",
      "Arroz Japonês (Shari)",
      "Alga Nori",
      "Cream Cheese",
      "Gergelim Moído",
    ],
    avaliacao: 4.8,
    tempoEntrega: "30-40 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap2",
    categoriaId: "14",
    nome: "Temaki de Salmão Completo",
    tamanho: "Unidade (180g)",
    preco: 28.9,
    descricao:
      "Cone de alga crocante recheado até o topo com muito salmão fresco em cubos, cream cheese original e cebolinha picada.",
    ingredientes: [
      "Salmão Fresco",
      "Alga Nori",
      "Arroz Japonês",
      "Cream Cheese",
      "Cebolinha Fresca",
    ],
    avaliacao: 4.9,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap3",
    categoriaId: "14",
    nome: "Hot Roll Filadélfia (10 peças)",
    tamanho: "Porção",
    preco: 25.0,
    descricao:
      "O sushi quente mais amado! Enrolado de salmão com cream cheese, empanado em farinha panko super crocante, frito e finalizado com molho tarê e gergelim.",
    ingredientes: [
      "Salmão",
      "Cream Cheese",
      "Alga Nori",
      "Arroz Japonês",
      "Farinha Panko",
      "Molho Tarê",
      "Gergelim",
    ],
    avaliacao: 4.9,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap4",
    categoriaId: "14",
    nome: "Yakisoba Misto Tradicional",
    tamanho: "Individual (500g)",
    preco: 42.0,
    descricao:
      "Prato quente super bem servido. Macarrão próprio para yakisoba salteado na panela wok com carne bovina, frango e um mix de legumes crocantes em molho especial.",
    ingredientes: [
      "Macarrão Oriental",
      "Carne Bovina",
      "Frango",
      "Brócolis",
      "Cenoura",
      "Acelga",
      "Molho de Soja (Shoyu)",
      "Óleo de Gergelim",
    ],
    avaliacao: 4.7,
    tempoEntrega: "30-45 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap5",
    categoriaId: "14",
    nome: "Sashimi de Salmão (15 fatias)",
    tamanho: "Porção (150g)",
    preco: 55.0,
    descricao:
      "Para quem aprecia o puro sabor do peixe. 15 cortes nobres, grossos e frescos de salmão premium, acompanhados de wasabi e gengibre em conserva.",
    ingredientes: [
      "Salmão Premium",
      "Wasabi (Raiz Forte)",
      "Gari (Gengibre em Conserva)",
    ],
    avaliacao: 5.0,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap6",
    categoriaId: "14",
    nome: "Porção de Shimeji na Manteiga",
    tamanho: "Individual (200g)",
    preco: 35.0,
    descricao:
      "Aperitivo irresistível. Cogumelos shimeji pretos salteados na manteiga com shoyu de primeira qualidade e finalizados com cebolinha verde.",
    ingredientes: [
      "Cogumelos Shimeji",
      "Manteiga",
      "Shoyu",
      "Ajinomoto",
      "Cebolinha Fresca",
    ],
    avaliacao: 4.8,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap7",
    categoriaId: "14",
    nome: "Barca Sushi e Sashimi Premium",
    tamanho: "Serve 3 pessoas (50 peças)",
    preco: 140.0,
    descricao:
      "Para ocasiões especiais! Uma barca farta e variada com cortes de salmão, atum e peixe branco. Inclui sashimis, niguiris, jyo, uramakis e hossamakis.",
    ingredientes: [
      "Salmão",
      "Atum",
      "Peixe Branco (Tilápia ou Prego)",
      "Camarão",
      "Arroz Japonês",
      "Alga Nori",
      "Cream Cheese",
    ],
    avaliacao: 4.9,
    tempoEntrega: "45-60 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap8",
    categoriaId: "14",
    nome: "Uramaki Skin (10 peças)",
    tamanho: "Porção",
    preco: 22.0,
    descricao:
      "Enrolado com o arroz por fora, recheado com pele de salmão grelhada bem crocante, cream cheese, coberto com gergelim torrado e gotinhas de molho tarê.",
    ingredientes: [
      "Pele de Salmão (Skin)",
      "Arroz Japonês",
      "Alga Nori",
      "Cream Cheese",
      "Gergelim Torrado",
      "Molho Tarê",
    ],
    avaliacao: 4.6,
    tempoEntrega: "20-30 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap9",
    categoriaId: "14",
    nome: "Ceviche de Salmão e Peixe Branco",
    tamanho: "Individual (250g)",
    preco: 38.0,
    descricao:
      "Entrada super refrescante. Cubos de salmão e peixe branco marinados no limão (leite de tigre), com fina cebola roxa, pimenta biquinho e um toque de azeite.",
    ingredientes: [
      "Salmão Fresco",
      "Peixe Branco Fresco",
      "Limão",
      "Cebola Roxa",
      "Pimenta Biquinho",
      "Azeite",
      "Cebolinha",
    ],
    avaliacao: 4.8,
    tempoEntrega: "15-25 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jap10",
    categoriaId: "14",
    nome: "Guioza Suíno Grelhado",
    tamanho: "Porção (6 unidades)",
    preco: 26.0,
    descricao:
      "Clássicos pasteizinhos japoneses com recheio suculento de carne suína e legumes. Levemente grelhados na frigideira e cozidos no vapor. Acompanha molho ponzu.",
    ingredientes: [
      "Massa de Guioza",
      "Carne Suína Moída",
      "Repolho",
      "Cebolinha",
      "Óleo de Gergelim Torrado",
      "Alho",
      "Gengibre",
    ],
    avaliacao: 4.7,
    tempoEntrega: "25-35 min",
    imagem:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
