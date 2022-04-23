function atualizarTempo(){
    const display = document.querySelector(".display")

    const agora = new Date();

    const horario = corrigirHorario(agora.getHours()) + ":" + corrigirHorario(agora.getMinutes()) + ":" + corrigirHorario(agora.getSeconds());

    display.textContent = horario;
}

function corrigirHorario(numero){
    if (numero < 10){
        numero = "0" + numero;
    }
    return numero
};

atualizarTempo();
setInterval(atualizarTempo, 1000);


const deg = 6;
const hr = document.querySelector(".hr");
const mn = document.querySelector(".mn");
const sg = document.querySelector(".sg");

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sg.style.transform = `rotateZ(${ss}deg)`;
})