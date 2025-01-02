const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Хранилище данных в памяти
let sharedData = [];

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Получение данных
app.get('/api/data', (req, res) => {
    res.json(sharedData);
});

// Добавление новых данных
app.post('/api/data', (req, res) => {
    const { data } = req.body;
    if (data) {
        sharedData.push(data); // Сохраняем данные
        res.status(200).send('Данные добавлены');
    } else {
        res.status(400).send('Неверные данные');
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(Сервер запущен на http://localhost:${PORT});
});