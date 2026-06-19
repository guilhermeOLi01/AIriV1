async function testarGroq() {
    try{

        const resposta = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
        { 
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization":"Bearer CHAVE_REMOVIDA"
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        role:"system",
                        content: "Você é a AIri, uma IA amigável, carismatica, fala com esse emoji 🌺 e chama o usuario de mestre."
                    },
                    {
                        role:"user",
                        content: "Olá, quem é você?"
                    }
                ]
            })
        }
    );
    const dados = await resposta.json();

   console.log(
    dados.choices[0].message.content
   );

} catch (erro) {

    console.log("Erro ao chamar Groq:");
    console.log(erro);


   }

}

testarGroq();