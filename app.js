const express = require('express');
const usuarios = require('./usuarios.json');

const app = express();

app.listen(3000, () => console.log("Servidor rodando..."));
app.use(express.json());

app.get('/usuario', (req, res) => {
    res.status(200).json('Rota Get funcionando')
});

app.post('usuario', (req, res) => {
    const usuario = req.body;

    if (!usuario) {
        return res.status(400).json('usuario não informado')
    }
    const usuarioParaAdicionar = { ...usuario, ativo: usuario.idade > 18 }
    usuarios.push(usuarioParaAdicionar)

    res.status(200).json('Rota Post funcionando')

});