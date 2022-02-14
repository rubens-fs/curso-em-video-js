let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) { //Verificar se n é um número
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //O -1 indica que o valor não foi encontrado na lista
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //O valor que está adicionado dentro de número vai ser analisado para ver se ele é um número
        //Só vai adicionar SE for um número && SE ele NÃO estiver na lista
        //! Significa NÃO em JS, ou seja, SE NÃO está em lista
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ''; //Quando eu adicionar um novo número, ele tem que limpar o resultado anterior
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = ''; //Pra apagar o número posto anteriormente
    num.focus(); //Isso vai fazer com que ele sempre foque na barra do número, para que você não precise clicar toda vez
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length; //Para saber quantos elementos meu vetor tem
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior)
                maior = valores[pos];
            if (valores[pos] < menor)
                menor = valores[pos];
        }
        media = soma / tot;
        res.innerHTML = ''; //Zerar o valor
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>Calculando a média de todos os valores, temos ${media}.</p>`;
    }
}