const app = require('express')();

app.use('/', (req, res) => {
    res.send('<h1>Teste Final 2</h1>');
});

app.listen(7788, _ => {
    console.log('Rodando na porta 7788');
})
