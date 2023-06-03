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
  const telefoneEVazio = stringEVazia(telefoneCampo);

  if (nomeEVazio === true) {
    alert("Preencha o campo nome");
    return;
  } else if (emailEVazio === true) {
    alert("Preencha o campo email");
    return;
  }
  if (telefoneEVazio === true) {
    alert("Preencha o campo telefone");
    return;
  } else {
    console.log("Formulário Enviado");
  }
}

//seleciona o local da imagem por id
const galeria = document.getElementById("galeria-principal");
// criar o elemento da imagem
const imagem = document.createElement("img");

// definir o atributo src
imagem.src =
  "https://raw.githubusercontent.com/camilapessoa/jovem-aprendiz/master/img/ana-carolina-da-hora-hackear-o-racismo-1594591816588_v2_1x1.jpg";
// definir o atributo alt
imagem.alt =
  "A imagem apresenta a cientista Nina da Hora, sorrindo. Ao fundo há uma parede na cor roxa";
// adicionar a imagem à página
galeria.appendChild(imagem);
