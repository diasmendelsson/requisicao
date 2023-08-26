//Incluir as bibliotecas
//Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");
//Chamar a função express
const router = express.Router();

//Incluir o arquivo que possui a conexão com banco de dados 
const db = require('../db/models')


//Criar a rota cadastrar
router.post("/requisicaos", async (req, res) => {
    
    //Receber os dados enviados no corpo da requisição
    var dados = req.body;
    //console.log(dados)

    //Salvar no banco de dados 
    await db.Requisicao.create(dados).then((dadosUsuario) => {
        //Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Usuário criado com sucesso!",
            dadosUsuario
        });
    }).catch(() => {
        return res.status(400).json({
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    })
});

//Exportar a instrução que está dentro da constante router
module.exports = router;