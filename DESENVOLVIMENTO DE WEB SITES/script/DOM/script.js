//1. Selecionando e modificando elemntos

function modificartexto () {
   let paragrafo = document.getElementById("paragrafoModificavel")

   paragrafo.textContent = "Este paragrafo foi modificado pelo javascript"
}
//2. Alterando o estilo do elemento
function modificaEstilo (){
    let paragrafo = document.getElementById("paragrafoEstilizavel")

    paragrafo.style.color ="blue"
    paragrafo.classList.add("highlight")

    
}

function adicionarItem() {
    const lista = document.getElementById ("minhalista")
    const novoItem = document.createElement("li")
    novoItem.textContent = prompt ("Digite o nome do produto")
    
    lista.appendChild(novoItem)
}

function removerItem (){
    const lista = document.getElementById("minhalista")
    lista.removeChild(lista.lastElementChild)
}

function conteudoDinamico() {
    const divDinamica = document.getElementById("conteudoDinamico")

    divDinamica.innerHTML = `
    <h3>Conteudo dinamico adicionado</h3>
    <p>Este conteudo foi adicionado usando o innerHTML</p>
    <ul>
    <li>Você pode incluir uma lista também</li>
    </ul>
    `
}