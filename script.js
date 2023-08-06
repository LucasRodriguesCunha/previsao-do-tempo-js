// Key API
const chaveAPI_openweathermap = "ff7303a707a7463ce723de690521cff8";

function cliqueBotao() {

    const cidade = document.querySelector("input").value;

    buscarCidade(cidade);
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveAPI_openweathermap}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    mostrarDadosNaTela(dados);
}

function mostrarDadosNaTela(dados) {
    
    console.log(dados);

    // Exibir cidade  
    document.querySelector(".cidade").innerHTML = "> Cidade: " + `<strong>${dados.name}<strong>`;

    // Exibir temperatura
    document.querySelector(".temperatura").innerHTML = "> Temperatura atual de " + `<strong>${Math.floor(dados.main.temp)}<strong>` + "°C";

    // Exibir nuvens
    document.querySelector(".nuvens").innerHTML = "> " + dados.weather[0].description;

    // Exibir umidade
    document.querySelector(".umidade").innerHTML = "> Umidade de "+ dados.main.humidity + "%";

    // Ícone
    document.querySelector(".img-icone").src =  "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";

    

}




