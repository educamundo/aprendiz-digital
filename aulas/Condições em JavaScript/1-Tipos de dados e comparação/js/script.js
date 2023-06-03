const meuBotao = document.getElementById("botaoEnviar");
function clickBotao(evento) {
  evento.preventDefault();
  console.log("Botão Clicado");
  pegaInputs();
}

function stringEVazia(texto){
  return texto === ""
}

function pegaInputs() {
  const nomeCampo = document.getElementById("nome").value;
  const emailCampo = document.getElementById("email").value;
  const telefoneCampo = document.getElementById("telefone").value;
  const sugestaoCampo = document.getElementById("sugestao").value;
  console.log(nomeCampo, emailCampo, telefoneCampo, sugestaoCampo);
  console.log(stringEVazia(nomeCampo))
  
}

meuBotao.addEventListener("click", clickBotao);
