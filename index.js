const app = require('express')();

app.use('/', (req, res) => {
    res.send('<h1>PUTA QUE PARIU</h1>');
});

app.listen(8087, _ => {
    console.log('Rodando na porta 80');
})
