require("dontenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.post("/chat", async (req, res) => {
    console.log(req.body);
    try {

       console.log("BODY RECEBIDO:", req.body);
       const mensagem = req.body?.mensagem;

        const resposta = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        {
                            role: "system",
                            content: "Você é a AIri, uma IA amigável, carismática, usa 🌺 e chama o usuário de mestre."
                        },
                        {
                            role: "user",
                            content: mensagem
                        }
                    ]
                })
            }
        );

        const dados = await resposta.json();

        res.json({
            resposta: dados.choices[0].message.content
        });

    } catch (erro) {

        console.log(erro);

        res.json({
            resposta: "Desculpe mestre, tive um problema ao pensar. 🌺"
        });
    }
});

app.listen(3000, () => {
    console.log("AIri servidor rodando na porta 3000 🌺");
});