const data = new Date();

const renderCalendar = () => {

    data.setDate(1)

    const diasDoMes = document.querySelector(".dias");

    const ultimoDia = new Date(data.getFullYear(), data.getMonth()+ 1, 0).getDate();

    const anteriorAoPrimeiroDia = new Date(data.getFullYear(), data.getMonth(), 0).getDate();

    const primeiroDia = data.getDay();

    const aposAoUltimoDia = new Date(data.getFullYear(), data.getMonth()+ 1, 0).getDay();

    const novosDias = 7 - aposAoUltimoDia - 1;

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    document.querySelector(".data h1").innerHTML = meses[data.getMonth()];

    document.querySelector('.data p').innerHTML = new Date().toDateString();

    let dias = "";

    for(let x = primeiroDia; x > 0; x--){
        dias+= `<div class="prev-date">${anteriorAoPrimeiroDia - x + 1}</div>`;
    }

    for(let i = 1; i<=ultimoDia ;i++){
        if(i === new Date().getDate() && data.getMonth() === new Date().getMonth()){
            dias += `<div class="today">${i}</div>`;
        }else{
            dias += `<div>${i}</div>`;
        }
    }

    if (novosDias > 0){
        for(let j = 1; j<= novosDias; j++){
        dias += `<div class="next-date">${j}</div>`;
        diasDoMes.innerHTML = dias;
    }
    }else{
        diasDoMes.innerHTML = dias;
    }
}

document.querySelector(".prev").addEventListener('click', () =>{
    data.setMonth(data.getMonth() - 1);
    renderCalendar();
})

document.querySelector(".next").addEventListener('click', () =>{
    data.setMonth(data.getMonth() + 1);
    renderCalendar();
})

renderCalendar();