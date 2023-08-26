//Incluir as bibliotecas
//Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");
const cors = require("cors");

//Chamar a função express
const app = express();

//Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

//Criar o middleware para permitir  requisição externa
app.use((req, res, next) => {
    // Qualquer endereço pode fazer requisição
    res.header("Access-Control-Allow-Origin", "*");
    //Tipos de métodos que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type");

    // Executar o cors
    app.use(cors());
    //Quando não houver erro deve continuar o processamento
    next();

})

//Testar a conexão com banco de dados
const db = require('./db/models')

//Incluir as CONTROLLERS
const requisicao = require('./controllers/requisicaos');

//Criar as rotas
app.use('/', requisicao);

//Iniciar o servidor na porta 8080, criar a função utilizando o modelos Arrow function para retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Server running on port 8080: http://localhost:8080"); 
});