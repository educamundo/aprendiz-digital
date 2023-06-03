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

const galeria = document.getElementById("galeria-principal");

let imagensGaleria = [
  "https://raw.githubusercontent.com/camilapessoa/jovem-aprendiz/master/img/ana-carolina-da-hora-hackear-o-racismo-1594591816588_v2_1x1.jpg",
  "https://raw.githubusercontent.com/camilapessoa/jovem-aprendiz/master/img/unnamed.jpg",
  "https://raw.githubusercontent.com/camilapessoa/jovem-aprendiz/master/img/aoNiv4uZ_400x400.jpg",
  "https://raw.githubusercontent.com/camilapessoa/jovem-aprendiz/master/img/nina-da-hora-30052022-150531.png"
];

for (let i = 0; i < imagensGaleria.length; i = i + 1) {
  const imagem = document.createElement("img");
  imagem.src = imagensGaleria[i];
  galeria.appendChild(imagem);
}
