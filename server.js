//configurando o servidor
//chamando o express
var express = require('express');
//instanciando o express e guardando na variável app
var app = express();

//app está carregando tudo dentro do express; 
app.set("view engine", "ejs");

//criando rota
app.get("/", function (req, res) {
    res.render("criando");
})

app.get("/criando", function (req, res) {
    res.render("criando");
})

app.get("/buscando", function (req, res) {
    res.render("buscando");
})

//pedindo para rodar
app.listen(8080);
console.log("Rodando")