let campoMensagem =
    document.getElementById("mensagem");
let botaoEnviar = document.getElementById("enviar");
let chat = document.getElementById("chat");

let msgBot = document.createElement("p");
msgBot.textContent = "🌺AIri V1.1\n\nOlá Mestre!\nDigite'ajuda' para ver meus comandos";
msgBot.classList.add("bot");
chat.appendChild(msgBot);

//enter
campoMensagem.addEventListener("keydown", function (event) {

    if (event.key == "Enter") {
        botaoEnviar.click();
    }
});

botaoEnviar.addEventListener("click", function () {

    let mensagem = campoMensagem.value;

    //criar mensagem do usuario
    let msgUser = document.createElement("p");
    msgUser.textContent = "Você:" + mensagem;
    msgUser.classList.add("user");
    chat.appendChild(msgUser);

    //resposta da airi

    let resposta = "";
    if (mensagem == "oi") {
        resposta = "olá,mestre bem vindo! como posso ajudar hoje? 🌺";
    }

    else if (mensagem == "curiosidade") {
        resposta = "você sabia que Airi é o primeiro projeto do meu criador?";
    }

    else if (mensagem == "github") {
        resposta = "Meu código está disponivel em:\n\https://github.com/guilhermeOLi01/AIriV1\n\nLá você pode acompanhar minha evolução.";
    }

    else if (mensagem == "linkedin") {
        resposta = "Meu criador compartilha sua jornada de aprendizado no linkedIn:\n\www.linkedin.com/in/guilherme-oliveira-55470a410\n\n venha acompanhar sua evolução!";
    }

    else if (mensagem == "criador") {
        resposta = "Meu criador é Guilherme. Fui criada para ajuda-lo a aprender programação e me tornar uma IA cada vez melhor!.🌺";
    }

    else if (mensagem == "trabalho") {
        resposta = "o traballho pode ser cansativo, mestre. mas cada experiência traz aprendizado🌺";
    }

    else if (mensagem == "estudar") {
        resposta = "estudar é uma ótima forma de evoluir! o que deseja aprender hoje?";

    }

    else if (mensagem == "ajuda") {
        resposta = "\naqui estão Alguns comandos disponiveis da AIri \n\oi\najuda\ncuriosidade\ntrabalho\nestudar\ncriador\ngithub\nlinkedin";
    }

    else {
        resposta = "desculpe,mestre. ainda não aprendi sobre esse assunto";
    }

    let digitando = document.createElement("p");
    digitando.textContent = "AIri está digitando...";
    chat.appendChild(digitando);
    chat.scrollTop = chat.scrollHeight;

    setTimeout(function () {

        digitando.remove();

        let msgBot = document.createElement("p");
        msgBot.textContent = "AIri:" + resposta;
        msgBot.classList.add("bot");
        chat.appendChild(msgBot);


        //limpar input
        campoMensagem.value = "";

        //sempre por ultimo     
        chat.scrollTop = chat.scrollHeight;

    }, 1000);

});