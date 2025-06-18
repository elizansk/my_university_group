const express = require('express');
const path = require('path');
const app = express();
const PORT = 8081;

// Раздача файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
// Маршруты на каждую страницу
app.get('/profiles/Ilya.html', (req, res) => res.sendFile(path.join(__dirname, 'public/profiles/Ilya.html')));
app.get('/profiles/JENYA.html', (req, res) => res.sendFile(path.join(__dirname, 'public/profiles/JENYA.html')));
app.get('/profiles/liza.html', (req, res) => res.sendFile(path.join(__dirname, 'public/profiles/liza.html')));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер работает на http://localhost:${PORT}`);
});