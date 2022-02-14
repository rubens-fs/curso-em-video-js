function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = ""; // Antes de mostrar a tabuada, eu limpo minha área de tabuada
        while (c <= 10) {
            let item = document.createElement('option'); // É como se eu tivesse indo no HTML criando a opção option
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}