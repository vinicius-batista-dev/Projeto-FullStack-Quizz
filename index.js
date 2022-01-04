const express = require('express');
const app = express();


const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.listen(PORT, () => {console.log("App started.");});