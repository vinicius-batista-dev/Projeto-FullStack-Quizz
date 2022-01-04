const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const conn = require('./database/database');
const Pergunta = require('./database/Pergunta');

conn.authenticate().then(() => {console.log("Conexao feita com o banco de dados!")}).catch((msgErro) => { console.log(msgErro);})

const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    Pergunta.findAll({ raw: true, order:[
        ['id', 'DESC']
    ]}).then(perguntas => {  
        res.render("index", {
        perguntas: perguntas
    });
  }); 
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findAll({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){
            res.render("pergunta");
        }else{
            res.redirect("/");
        }
    });
})
app.listen(PORT, () => {console.log("App started.");});