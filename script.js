let campoMensagem =
document.getElementById ("mensagem");
let botaoEnviar = document.getElementById ("enviar");
let chat = document.getElementById ("chat");
  botaoEnviar.addEventListener("click",function(){

    let mensagem = campoMensagem.value;

if (mensagem=="oi"){
    chat.textContent = "olá,mestre bem vindo! como posso ajudar hoje? 🌺"
}

else if (mensagem=="curiosidade"){
    chat.textContent = "você sabia que Airi é o primeiro projeto do meu criador?"
}      
else if (mensagem=="trabalho"){
    chat.textContent = "o traballho pode ser cansativo, mestre. mas cada experiência traz aprendizado🌺"
}

else if (mensagem=="estudar"){
   chat.textContent = "estudar é uma ótima forma de evoluir! o que deseja aprender hoje?"

}

else if(mensagem=="ajuda"){
    chat.textContent = "ainda estou aprendendo, mas farei o meu melhor para ajudar"
}

else{
    chat.textContent = "desculpe,mestre. ainda não aprendi sobre esse assunto"
}

     campoMensagem.value = "";

});