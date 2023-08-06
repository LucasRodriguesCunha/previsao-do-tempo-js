// *******************************
// *       OpenWeather API       *
// *******************************  


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
    document.querySelector(".umidade").innerHTML = "> Umidade de " + dados.main.humidity + "%";

    // Ícone
    document.querySelector(".img-icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";

}

// *******************************
// *       Unsplash API          *
// *******************************


// // Key API
// const chaveAPI_unsplash = "wA745YW7-nnDqPgNZtffO1UWUX80uXzjnGN0g2BcpsE";

// // Função para buscar uma imagem do Unsplash
// async function buscarImagem(cidade) {

//     // Fazer uma requisição à API do Unsplash
//     const response = await fetch(`https://api.unsplash.com/photos/random?query=${cidade}`, {
//         headers: {
//             Authorization: `Bearer ${chaveAPI_unsplash}`,
//         },
//     });

//     // Verificar se a requisição foi bem-sucedida
//     if (response.status === 200) {

//         // Obter a imagem do corpo da resposta
//         const image = await response.json();

//         // Exibir a imagem no container 2
//         document.querySelector(".container-2").innerHTML = `
//       <img src="${image.urls.raw}" alt="Imagem da cidade">
//     `;
//     } else {

//         // Exibir uma mensagem de erro
//         document.querySelector(".container-2").innerHTML = `
//       <p>Erro ao buscar a imagem</p>
//     `;
//     }
// }

// // Executar a função ao clicar no botão
// document.querySelector("button").addEventListener("click", async () => {
//     const imagem = await buscarImagem(document.querySelector("input").value);
//     document.querySelector(".container-2").innerHTML = `
//     <img src="${imagem.urls.raw}" alt="Imagem da cidade">
//   `;
// });
