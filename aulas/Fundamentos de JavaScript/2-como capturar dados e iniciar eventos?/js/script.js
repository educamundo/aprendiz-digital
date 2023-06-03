const meuBotao = document.getElementById("botaoEnviar");
function clickBotao(evento) {
  evento.preventDefault();
  console.log("Botão Clicado");
}

meuBotao.addEventListener("click", clickBotao);
