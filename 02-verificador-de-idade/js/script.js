function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.getElementById('res');
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) <= 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';    
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        // criado um 'img' com id 'foto'
        // é como se eu tivesse ido no html, na div e colocado <img id='foto'>
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './img/foto-bebe-m.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './img/foto-jovem-m.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './img/foto-adulto-m.png');
            } else {
                // Idoso
                img.setAttribute('src', './img/foto-idoso-m.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './img/foto-bebe-f.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './img/foto-jovem-f.png');
            } else if  (idade < 50) {
                // Adulto
                img.setAttribute('src', './img/foto-adulto-f.png');
            } else {
                // Idoso
                img.setAttribute('src', './img/foto-idoso-f.png');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}