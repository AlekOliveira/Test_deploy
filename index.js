const app = require('express')();

app.use('/', (req, res) => {
    res.send('<h1>Teste hehe</h1>');
});

app.listen(80, _ => {
    console.log('Rodando na porta 80');
})