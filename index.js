const express = require('express');
const app = express();

const PORT = 4001;

app.get("/", (req, res) => {
    res.send("Bem vindo ao meu site");
});

app.listen(PORT, () => { console.log('App started.');});
