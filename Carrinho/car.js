$(document).ready(function () {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const listaEl = $('#lista');
    const totalEl = $('#total');

    function exibirCar()
    {
        listaEl.empty();

        let totalPreco = 0;
        $.each(carrinho, function(index, item)
        {
            const listItem = $("<li>").text(
                `${item.descricao} - Preço: $${item.preco}`
            )

            const removeBut = $('<button>').text("❌").css('margin-left', '10px').click(function ()
            {
                removeItemDoCarrinho(index);
            })

            listItem.append(removeBut);
            
            listaEl.append(listItem);

            totalPreco += item.preco;

        })

        totalEl.text(`Total: R$${totalPreco.toFixed(2)}`);
    }

    function removeItemDoCarrinho(index) 
    {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        exibirCar();
    }

    exibirCar();
})

const successClose = () => document.getElementById("pedido").style.display = "none";
