
function atualizarDataHora() {
    //Horario
    const tempoAtual = new Date();
    let horas = tempoAtual.getHours();
    let minutos = tempoAtual.getMinutes();
    let segundos = tempoAtual.getSeconds();
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    //Data
    let dia = tempoAtual.getDate();
    let mes = tempoAtual.getMonth()+1;
    let ano = tempoAtual.getFullYear();
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    ano = ano < 10 ? "0" + mes : ano;

    document.getElementById("relogio").textContent = `${horas}:${minutos}:${segundos}`;
    document.getElementById("data").textContent = `${dia} / ${mes} / ${ano}`;
}
setInterval(atualizarDataHora, 1000);
atualizarDataHora();