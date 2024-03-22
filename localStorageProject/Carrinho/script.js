$(document).ready(function () {

    const listaElement = $('#lista');
    const totalElement = $('#total');

    function exibirCarrinho(){
        listaElement.empty();

        let totalPreco = 0;

        $.each(carrinho,function(index, item){
        const listItem = $("<li>").text(
            `${item.descricao} - Preço: R$${item.preco}`
        )
        const removeButtom = $('<button>').text("").css('margin-left', '10px').click(function (){
            removeItemDoCarrinho(index)

        });
        listItem.append(removeButtom)

        listaElement.append(listItem)

        totalPreco = item.preco;
        });

        function removeItemDoCarrinho(index){
            carrinho.splice(index, 1);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            exibirCarrinho();
         }
             exibirCarrinho();
         });
         
         const successClose = () => document.getElementById("pedido").style.display = "none";