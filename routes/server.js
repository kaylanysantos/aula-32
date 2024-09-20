const express = require('express');

const {videos} = require("../api/src/mock/dados.json")

const servidor = express();
servidor .get("/", (req, res) => {
response.send("ola mundo")
})



servidor.listen("3000", () => console.log ("Servidor iniciado na porta 3000"));

