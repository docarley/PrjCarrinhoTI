let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `
    <li class="carrinho__item"><span class="texto--azul">${quantidade}</span> ${produto} <span class="texto--azul">R$ ${preco}</span></li>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}