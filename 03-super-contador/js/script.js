function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
    } else {
        res.innerHTML = 'Contando: <br>'; // Com quebra de linha
        let i = Number(ini.value); // Ou seja, vou pegar o valor que está dentro de ini, e vou converter para um número
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`; // Esses emojis só funcionam entre crases
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerText += ` ${c} \u{1F449}`;
            }
        }
        res.innerText += `\u{1F3C1}`;
    }
}