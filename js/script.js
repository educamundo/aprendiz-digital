function criarItemDeGaleria(src){
  const imagem = document.createElement('img');
  imagem.setAttribute('src', src)

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
    {alt: "Nina1", src: 'img/nina.jpeg'},
    {alt: "Nina2", src: 'img/nina2.png'},
    {alt: "Nina3", src: 'img/nina3.jpg'},
    {alt: "Nina4", src: 'img/nina4.jpg'},
  ]

  const galeria = document.querySelector("#galeria-principal")

  for(let i = 0 ; i < imagensGaleria.length; i++){
    const item = imagensGaleria[i];
    const imagem = criarItemDeGaleria(item.src, item.alt)

    if(numeroPar(i)){
      const quebraDelinha = criarQuebraDeLinha()
      galeria.appendChild(quebraDelinha)
    }

    galeria.appendChild(imagem)
  }

}

criarGaleria()

// Passo 1: Selecionar um elemento

