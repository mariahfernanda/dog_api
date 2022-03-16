'use strict'

const pesquisarRacas = async () => {
    const url = `https://dog.ceo/api/breeds/list/all`
    const response = await fetch (url)
    const data = await response.json()
    return Object.keys(data.message)
}

const pesquisarCachorro = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

const criarImg = (imagem) =>{
    const img = document.createElement('img')
    img.src = imagem

    return img
}

const carregarImagens = async () => {
    const container = document.getElementById('imagem-container')
    const raca =  document.getElementById ('raca').value
    const imagens = await pesquisarCachorro(raca)

    const tagImagens = imagens.message.map(criarImg)

    container.replaceChildren(...tagImagens)

    //teste: console.log(imagens)
}

const carregarRacas = async ()=>{
    const lista = document.getElementById('lista-raca')
    const racas = pesquisarRacas()
    lista.innerHTML = `
    <option>
        ${racas.join("</option><option>")}
    </option>
    `
}

document
    .getElementById('pesquisar')
    .addEventListener('click', carregarImagens)

carregarRacas()

//Modal
const abrirModal = () =>{ 
    document 
        .getElementById('modal-container')
        .classList.add('active')
    }


const fecharModal = () =>{
    document 
        .getElementById('modal-container')
        .classList.remove('active')
    }


document
    .getElementById('abrir-modal')
    .addEventListener('click', abrirModal)


document
    .getElementById('fechar')
    .addEventListener('click', fecharModal)

document
    .getElementById('fechar')
    .addEventListener('click', fecharModal)