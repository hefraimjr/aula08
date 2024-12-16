const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let carrosEsportivos = [];

app.post('/carros', (req, res) => {
    const { nome, email } = req.body;
    
    if (!nome || !email) {
        return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
    }

    const novoCarros = { id: carros.length + 1, nome, email };
    carros.push(novoCarros);
    
    res.status(201).json(novoCarros);
});

app.get('/carros', (req, res) => {
    res.status(200).json(usuarios);
});

app.get('/carros/:id', (req, res) => {
    const { id } = req.params;
    const carros = carros.find(u => u.id === parseInt(id));
    
    if (!carros) {
        return res.status(404).json({ erro: 'carros não encontrado' });
    }
    
    res.status(200).json(carros);
});

app.put('/carros/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    
    const carros = carros.find(u => u.id === parseInt(id));
    
    if (!carros) {
        return res.status(404).json({ erro: 'carros não encontrado' });
    }
    
    carros.nome = nome || carros.nome;
    carros.email = email || carros.email;
    
    res.status(200).json(carros);
});

app.delete('/carros/:id', (req, res) => {
    const { id } = req.params;
    const index = carros.findIndex(u => u.id === parseInt(id));
    
    if (index === -1) {
        return res.status(404).json({ erro: 'carros não encontrado' });
    }
    
    carros.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
