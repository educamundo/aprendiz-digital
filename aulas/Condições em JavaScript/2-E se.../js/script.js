const meuBotao = document.getElementById("botaoEnviar");
let nomeCampo;
let emailCampo;
let telefoneCampo;
let sugestaoCampo;

function clickBotao(evento) {
  evento.preventDefault();
  console.log("Botão Clicado");
  pegaInputs();
  validaFormulario();
}

function stringEVazia(texto) {
  return texto === "";
}

function pegaInputs() {
  nomeCampo = document.getElementById("nome").value;
  emailCampo = document.getElementById("email").value;
  telefoneCampo = document.getElementById("telefone").value;
  sugestaoCampo = document.getElementById("sugestao").value;
  console.log(nomeCampo, emailCampo, telefoneCampo, sugestaoCampo);
  console.log(stringEVazia(nomeCampo));
}

meuBotao.addEventListener("click", clickBotao);

function validaFormulario() {
  const nomeEVazio = stringEVazia(nomeCampo);
  const emailEVazio = stringEVazia(emailCampo);
  if (nomeEVazio === true) {
    alert("Preencha o campo nome");
  } else {
    console.log("Nome preenchido");
  }
}
