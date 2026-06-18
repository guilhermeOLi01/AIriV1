let campoMensagem =
document.getElementById ("mensagem");
let botaoEnviar = document.getElementById ("enviar");
let chat = document.getElementById ("chat");
//arrayas
let respostaSaudacao = [
    "Olá, mestre!🌺",
    "Bem-vindo novamente!🌺",
    "Que bom te ver por aqui!🌺"
];

let respostaEstudar = [
    "Estudar é uma ótima forma de evoluir!🌺",
    "O conhecimento abre portas, mestre!🚀",
    "Cada dia  de estudo te aproxima do seu objetivo.🌺"
];

let respostaTrabalho = [
    "O trabalho desenvolve habilidades e abre novas oportunidades. 🚀",
    "Cada experiência profissional ensina algo valioso para o futuro. 🌺",
    "Persistência no trabalho costuma trazer resultados a longo prazo. 💼",
    "Todo profissional começou como iniciante um dia. Contiue evoluindo!🚀"
];

let respostaCuriosidade = [
    "🐙 Polvos possuem três corações!",
    "🦒 A língua de uma girafa pode medir até 50 centímetros.",
    "🍯 O mel é um dos poucos alimentos que não estraga naturalmente.",
    "🧠 O cérebro humano possui cerca de 86 bilhões de neurônios."
];
//comandos feitos
let comandos= {
    oi: respostaSaudacao,
    estudar: respostaEstudar,
    trabalho: respostaTrabalho,
    curiosidade: respostaCuriosidade
};

function respostaAleatoria(array){
    let indice =
    Math.floor(Math.random()* array.length);

    return array[indice];
}

//api

async function curiosidadeAPI() {

    let resposta = await fetch(
        "https://catfact.ninja/fact"
    );

    let dados = await resposta.json();

    return dados.fact;
    
}

curiosidadeAPI().then(function(resultado){
    console.log(resultado);
});

async function conselhoAPI() {
    let resposta = await fetch(
        "https://api.adviceslip.com/advice"
    );

    let dados = await resposta.json();

    return dados.slip.advice;
    
}

//evento botão
let msgBot = document.createElement("p");
msgBot.textContent = "🌺AIri V1.1\n\nOlá Mestre!\nDigite'ajuda' para ver meus comandos";
msgBot.classList.add("bot");
chat.appendChild(msgBot);

//enter
campoMensagem.addEventListener("keydown",function(event){
    
    if (event.key == "Enter"){
        botaoEnviar.click();
    }
});

botaoEnviar.addEventListener("click", async function(){

    let mensagem = campoMensagem.value;
   
//criar mensagem do usuario
let msgUser = document.createElement ("p");
msgUser.textContent = "Você:" + mensagem;
msgUser.classList.add("user");
chat.appendChild(msgUser);
chat.scrollTop = chat.scrollHeight;

let digitando = document.createElement("p");
digitando.textContent = "AIri está digitando...";
chat.appendChild(digitando);

chat.scrollTop = chat.scrollHeight;

//resposta da airi

let resposta="";
if (mensagem == "curiosidade"){
    resposta = await curiosidadeAPI();
}

else if (mensagem == "conselho"){
    resposta = await conselhoAPI();
}

else if (comandos[mensagem]) {
    resposta = respostaAleatoria(comandos[mensagem]);
}

else if(mensagem=="github"){
    resposta = "Meu código está disponivel em:\n\https://github.com/guilhermeOLi01/AIriV1\n\nLá você pode acompanhar minha evolução.";
}

else if (mensagem=="linkedin"){
    resposta = "Meu criador compartilha sua jornada de aprendizado no linkedIn:\n\www.linkedin.com/in/guilherme-oliveira-55470a410\n\n venha acompanhar sua evolução!";
}

else if (mensagem=="criador"){
    resposta = "Meu criador é Guilherme. Fui criada para ajuda-lo a aprender programação e me tornar uma IA cada vez melhor!.🌺";
}

else{
    resposta = "desculpe,mestre. ainda não aprendi sobre esse assunto";
}

setTimeout(function(){

    digitando.remove();

let msgBot = document.createElement("p");
msgBot.textContent = "AIri:" + resposta;
msgBot.classList.add("bot");
chat.appendChild(msgBot);


//limpar input
     campoMensagem.value = "";
    
//sempre por ultimo     
    chat.scrollTop = chat.scrollHeight;

},1000);

});