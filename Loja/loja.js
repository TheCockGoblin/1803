let produtos;

window.onload = function ()
{
    var storedUser = localStorage.getItem("usuario");

    var user = JSON.parse(storedUser);
    console.log(storedUser);
    console.log(user);

    document.getElementById("user").textContent = user.name + user.dataEntrada;
    document.getElementById("perfil").textContent = user.name + "" + user.dataEntrada;
    document.getElementById("idPerfil").textContent = user.id;
}

document.addEventListener("DOMContentLoaded", function (){
    fetch("../Dados/loja.json").then((response) => response.json()).then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById("produtos-container");

        produtos.forEach((produto, index)=> {
            const card = document.createElement("div");
            card.className = "card"
            card.style.width = "18rem"
            card.style.marginRight = "10px"

            const imagem = document.createElement("img")
            imagem.src = produto.img
            imagem.className = "card-img-top"

            const cardBody = document.createElement("div")
            cardBody.className = "card-body"

            const cardTitle = document.createElement("h5")
            cardTitle.className = "card-title"
            cardTitle.textContent = produto.descricao

            const cardText = document.createElement("p")
            cardText.className = "card-text"
            cardText.textContent = produto.preco.toFixed(2)

            const btnAddCar = document.createElement("a")
            btnAddCar.href = "#"
            btnAddCar.className = "btn btn-primary btn-adicionar-ao-carrinho"
            btnAddCar.textContent = "Adicionar ao Carrinho"
            btnAddCar.setAttribute("data-indice", index)

            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardText)
            cardBody.appendChild(btnAddCar)

            card.appendChild(imagem)
            card.appendChild(cardBody)

            produtosContainer.appendChild(card)

        });
    }).catch((error) => console.error("Erro ao caregar JSON", error))
})