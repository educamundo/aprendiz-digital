
// Passo 1: Selecionar um elemento da galera
function criarGaleria(){
    const galeria = document.querySelector("#galeria-principal")
}

// Passo 2: Criar uma imagem
function criarGaleria(){
    const galeria = document.querySelector("#galeria-principal")

    const imagem = document.createElement('img');
    imagem.setAttribute('src', 'img/nina.jpeg')
    imagem.setAttribute('alt', 'Nina1')
}

// Passo 3: Anexar a imagem à galeria
function criarGaleria(){
    const galeria = document.querySelector("#galeria-principal")

    const imagem = document.createElement('img');
    imagem.setAttribute('src', 'img/nina.jpeg')
    imagem.setAttribute('alt', 'Nina1')

    galeria.appendChild(imagem)
}


// Passo 4: Extrair método de criação de imagem

function criarImagem(src, alt){
    const imagem = document.createElement('img');
    imagem.setAttribute('src', src)
    imagem.setAttribute('alt', alt)

    return imagem
}
function criarGaleria(){
    const galeria = document.querySelector("#galeria-principal")

    const imagem = criarImagem('img/nina.jpeg', 'Nina1')

    galeria.appendChild(imagem)
}

// Passo 5: Criar array com várias imagens
function criarImagem(src, alt){
    const imagem = document.createElement('img');
    imagem.setAttribute('src', src)
    imagem.setAttribute('alt', alt)

    return imagem
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

    const imagem = criarImagem('img/nina.jpeg', 'Nina1')

    galeria.appendChild(imagem)
}

// Passo 6: Adicionado fork

function criarImagem(src, alt){
    const imagem = document.createElement('img');
    imagem.setAttribute('src', src)
    imagem.setAttribute('alt', alt)

    return imagem
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
    const imagem = criarImagem('img/nina.jpeg', 'Nina1')

    for(let i = 0 ; i < imagensGaleria.length; i++){

    }

    galeria.appendChild(imagem)
}

// Passo 7: Criar galeria usando fork

function criarImagem(src, alt){
    const imagem = document.createElement('img');
    imagem.setAttribute('src', src)
    imagem.setAttribute('alt', alt)

    return imagem
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
        galeria.appendChild(imagem)

    }
}


// Passo 7: Criar quebra de linha

function criarQuebraDeLinha(){
    const myImage = document.createElement('br');
    return myImage
}


function criarImagem(src, alt){
    const imagem = document.createElement('img');
    imagem.setAttribute('src', src)
    imagem.setAttribute('alt', alt)

    return imagem
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
        galeria.appendChild(imagem)

    }
}

// Passo 7: Criar metodo para verificar se um numero é par

function criarQuebraDeLinha(){
    const myImage = document.createElement('br');
    return myImage
}
function numeroPar(numero){
    return numero % 2 === 0 ? true: false
}

function criarImagem(src, alt){
    const imagem = document.createElement('img');
    imagem.setAttribute('src', src)
    imagem.setAttribute('alt', alt)

    return imagem
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
        galeria.appendChild(imagem)

    }
}

// Passo 7: Adicionar quebra de linha para os indices pares

function criarQuebraDeLinha(){
    const myImage = document.createElement('br');
    return myImage
}
function numeroPar(numero){
    return numero % 2 === 0 ? true: false
}

function criarImagem(src, alt){
    const imagem = document.createElement('img');
    imagem.setAttribute('src', src)
    imagem.setAttribute('alt', alt)

    return imagem
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

