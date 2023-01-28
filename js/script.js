function criarItemDeGaleria(src){
  const myImage = document.createElement('img');
  myImage.setAttribute('src', src)

  return myImage

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
  const pintores=[
    {nome: "Vincent Van Gogh", src: 'img/nina.jpeg'},
    {nome: "Tarsila", src: 'img/nina2.png'},
    {nome: "Frida", src: 'img/nina3.jpg'},
    {nome: "DaVinci", src: 'img/nina4.jpg'},
  ]

  const galeria = document.querySelector("#galeria-principal")

  for(let i = 0 ; i < pintores.length; i++){
    const item = pintores[i];
    const imagem = criarItemDeGaleria(item.src)

    if(numeroPar(i)){
      const quebraDelinha = criarQuebraDeLinha()
      galeria.appendChild(quebraDelinha)
    }

    galeria.appendChild(imagem)
  }

}

criarGaleria()

// table
// anchor
// lista