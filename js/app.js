/*BUGS
- Botão limpar não reinicia a quantidade;
- Botões não parecem clicáveis;
- Número da quantidade fica negativo;
*/

let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$ ')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `
    <li class="carrinho__item"><span class="texto--azul">${quantidade}</span> ${nomeProduto} <span class="texto--azul">R$ ${preco.toFixed(2)}</span></li>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    document.getElementById('quantidade').value = 1;
}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';  
}