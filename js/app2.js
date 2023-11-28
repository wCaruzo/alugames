function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`)
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    if (imagem.classList.contains('dashboard__item__img--rented')) { // verifica se o elemtemo tem essa classe, neste caso RENTED
        imagem.classList.remove('dashboard__item__img--rented'); // Remove a classe do item, RENTED
        botao.classList.remove('dashboard__item__button--return'); // Remove a classe button return
        botao.textContent = 'Alugar';

    } else {
        imagem.classList.add('dashboard__item__img--rented'); // adiciona a classe ao item 
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';

    }
}
/*Todo elemento HTML tem uma propriedade chamada classList, que retorna a lista de classes que o elemento possui. Como sabemos,
 diferente do id, uma classe pode ser compartilhada entre várias tags e uma tag pode ter múltiplas classes.
  O id é único na página e cada elemento tem apenas um id.
  
 CONTAINS: verifica se na classList comtem aquele elemento especifico no HTML
 REMOVE: Remove aquele elemento especifico da classList
 Add: Adiciona o elemento especifico a classList.


*/



