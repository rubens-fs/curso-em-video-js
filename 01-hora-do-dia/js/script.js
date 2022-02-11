function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} hora(s) e ${minutos} minuto(s).`;
    if (hora >= 0 && hora <= 6) {
        // BOA MADRUGADA!
        img.src = './img/dawn.png';
        document.body.style.background = '#DD9772';
    } else if (hora > 6 && hora <= 12) {
        // BOM DIA!
        img.src = './img/morning.png';
        document.body.style.background = '#BED4DF';
    } else if (hora > 12 && hora <= 18) {
        // BOA TARDE!
        img.src = './img/evening.png';
        document.body.style.background = '#FD8618';
    } else if (hora > 18 && hora <= 24) {
        // BOA NOITE!
        img.src = './img/night.png';
        document.body.style.background = '#182F35';
    }
}