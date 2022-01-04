const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const conn = require('./database/database');

conn.authenticate().then(() => {console.log("Conexao feita com o banco de dados!")}).catch((msgErro) => { console.log(msgErro);})

const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descicao = req.body.descricao;
    res.send("Formulario recebido! " + titulo + " " + " " + " descricao " + descicao);
});


app.listen(PORT, () => {console.log("App started.");});