// Função para rolar o carrossel automaticamente
function rolarCarrossel() {
  const carousel = document.getElementById("carousel");
  const imagens = carousel.getElementsByTagName("img");
  const larguraImagem = imagens[0].offsetWidth;

  let posicaoAtual = 0;
  setInterval(() => {
    posicaoAtual = (posicaoAtual + 1) % imagens.length;
    carousel.style.transform = `translateX(-${larguraImagem * posicaoAtual}px)`;
  }, 5000); // Troca de imagem a cada 5 segundos (ajuste conforme necessário)
}

// Chama a função para iniciar o carrossel
rolarCarrossel();
