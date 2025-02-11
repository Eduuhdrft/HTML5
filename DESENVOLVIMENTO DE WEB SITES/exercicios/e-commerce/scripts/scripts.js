const produtos = [
    {
        id: 1,
        nome: "Baton",
        preco: 24.99,
        imagem: "assets/images/Baton.webp",
        categoria: "Maquiagem"
    },
    {
        id: 2,
        nome: "Blush",
        preco: 49.99,
        imagem: "assets/images/blush.webp",
        categoria: "Maquiagem"
    },
    {
        id: 3,
        nome: "Lápis-Delineador",
        preco: 29.99,
        imagem: "assets/images/lapis_preto.webp",
        categoria: "Maquiagem"
    },
    {
        id: 4,
        nome: "Lip-Gloss",
        preco: 49.99,
        imagem: "assets/images/lip_gloss_e_brilho_labial.webp",
        categoria: "Maquiagem"
    },
    {
        id: 5,
        nome: "Paleta-Sombra",
        preco: 79.99,
        imagem: "assets/images/olhos-paleta.png",
        categoria: "Maquiagem"
    },
    {
        id: 6,
        nome: "Rímel",
        preco: 39.99,
        imagem: "assets/images/Rimel.webp",
        categoria: "Maquiagem"
    },
    {
        id: 7,
        nome: "Kit-Pincel",
        preco: 79.99,
        imagem: "assets/images/pinceis2.jpg",
        categoria: "Maquiagem"
    },
    {
        id: 8,
        nome: "Àgua-Micelar",
        preco: 49.99,
        imagem: "assets/images/Agua-micelar.png",
        categoria: "Maquiagem"
    }
]

const productGrid = document.getElementById("product-grid")
const produtoContador = document.getElementById("produto-contador")
const carrinhoItens = document.getElementById("carrinhoItens")

function carregarProdutos() {
    produtos.forEach((produto) => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")

        productCard.innerHTML = `
    <img src="${produto.imagem}" ">
                <div class="product-info">
                    <div>
                        <div>
                            <span>${produto.categoria}</span>
                            <h3>${produto.nome}</h3>
                            <span>R$ ${produto.preco}</span>
                        </div>
                        <button onclick="adicionarNaSacola (${produto.id})">
                            <img src="assets/icons/shopping-bag-white.svg" alt="">
                        </button>
                    </div>
                </div>
    `

        productGrid.appendChild(productCard)
    })
}

function adicionarNaSacola(produtoId) {
    const produto = produtos.find((produto) => produto.id === produtoId)

    if (produto) {
        const carrinho = JSON.parse(sessionStorage.getItem("radiantMake_carrinho")) || []

        let produtoIndex = carrinho.findIndex((item) => item.id === produtoId)

        if (produtoIndex > -1) {
            carrinho[produtoIndex].quantity += 1
        } else {
            carrinho.push({...produto, quantity: 1})
        }

        sessionStorage.setItem("radiantMake_carrinho", JSON.stringify(carrinho))

        atualizarcontador()
    }


}

function atualizarcontador() {
    const carrinho = JSON.parse(sessionStorage.getItem("radiantMake_carrinho")) || []
    const quantidade = carrinho.length

    produtoContador.textContent = quantidade

    if (quantidade > 0) {
        produtoContador.style.display = "flex"
    } else {
        produtoContador.style.display = "none"
    }

    atualizarItensCarrinho()
}

const sideBag = document.getElementById("side-bag")

function toggleSidebar() {
    sideBag.classList.toggle("open")
}

function atualizarItensCarrinho() {
    const carrinho = JSON.parse(sessionStorage.getItem("radiantMake_carrinho")) || []

    if (carrinho.length > 0) {
        carrinhoItens.innerHTML = carrinho.map((item) => ` 
         <div class="product-card-mini">
                <div class="product-card-mini-container">
                    <img src="${item.imagem}" alt="">
                    <div class="product-card-mini-info">
                        <h4>${item.nome}</h4>
                        <p class="tag">${item.categoria}</p>
                        <div class="info-action-container">
                            <p>Qtd. ${item.quantity}</p>
                            <button onclick="removerItemCarrinho(${item.id})"><img src="assets/icons/tresh.svg" alt="">Remover</button>
                        </div>
                    </div>
                </div>
                <strong class="product-price">R$ ${(item.quantity * item.preco).toFixed(2)}</strong>
            </div>
         `).join("")

    } else {
        carrinhoItens.innerHTML = "<p> Nenhum item no carrinho</p>"
    }

    let mensagem = "Olá, gostaria de realizar a compra dos seguintes itens:\n\n"

    carrinho.forEach((item) => {
        mensagem += ` - ${item.nome}, Qtd: ${item.quantity}\n\n`
    })

    const mensagemCodificada = encodeURIComponent(mensagem)

    const finalizarBotao = document.getElementById("finalizarButton")

    finalizarBotao.href = `https://wa.me/5511950500298?text=${mensagemCodificada}`

    const total = carrinho.reduce((sum, item) => sum + item.quantity * item.preco, 0)
    const totalElement = document.getElementById("total-carrinho")

   totalElement.textContent  = `R$ ${total.toFixed(2)}`
}

function removerItemCarrinho(produtoId){
    let carrinho = JSON.parse(sessionStorage.getItem("radiantMake_carrinho")) || []
    carrinho = carrinho.filter((item) => item.id !== produtoId)

    sessionStorage.setItem("radiantMake_carrinho", JSON.stringify(carrinho))

    atualizarcontador()
}


window.onload = () => {
    carregarProdutos()
    atualizarcontador()
}

