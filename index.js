const express = require('express');
const app = express();

const PORT = 4001;

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;
    res.render("index" ,{
        nome: nome,
        lang: lang,
        empresa: 'Guia',
        inscritos: 200,
        msg: exibirMsg
    });
});

app.listen(PORT, () => { console.log('App started.');});
