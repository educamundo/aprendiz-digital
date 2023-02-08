document.getElementById("botaoEnviar").addEventListener("click", function (event){
  event.preventDefault()
  validaFormulario()
})

function stringEVazia(texto){
  return texto == ""
}

function validaFormulario(){

  const nomeEVazio =  stringEVazia(document.getElementById("nome").value);
  const emailEVazio =  stringEVazia(document.getElementById("email").value);
  const telefoneEVazio =  stringEVazia(document.getElementById("telefone").value);

  if(nomeEVazio === true){ // pode ser só if(nomeEVazio)
    alert("Preencha o campo nome")
    return;
  } else if(emailEVazio === true){
    alert("Preencha o campo email")
    return;
  }if(telefoneEVazio === true){
    alert("Preencha o campo telefone")
    return;
  }else{
    console.log("Formulário Enviado")
  }
}

function criarItemDeGaleria(src, i){
  const imagem = document.createElement('img');
  imagem.setAttribute('src', src)
  imagem.setAttribute('alt', 'nina'+i)

  return imagem

}
function criarQuebraDeLinha(){
  const myImage = document.createElement('br');
  return myImage
}

function numeroPar(numero){
  return numero % 2 === 0 ? true: false
}

function criarGaleria(){

  // Conceito de array e objetos
  const imagensGaleria=[
    'img/nina.jpeg',
    'img/nina2.png',
    'img/nina3.jpg',
    'img/nina4.jpg',
  ]

  const galeria = document.querySelector("#galeria-principal")

  for(let i = 0 ; i < imagensGaleria.length; i++){
    const item = imagensGaleria[i];
    const imagem = criarItemDeGaleria(item, i)

    if(numeroPar(i)){
      const quebraDelinha = criarQuebraDeLinha()
      galeria.appendChild(quebraDelinha)
    }

    galeria.appendChild(imagem)
  }

}

criarGaleria()

// Passo 1: Selecionar um elemento

