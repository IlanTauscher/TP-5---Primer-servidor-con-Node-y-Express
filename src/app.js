import express from 'express';
import tiempo from './time.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.get('/hora', (req, res) => {
    res.send(`${tiempo.Hora()}`);
});

app.get('/fecha-completa', (req, res) => {
    res.send(`${tiempo.FechaExacta()}`);
});

app.use((_req, res) => {
    res.status(404).send('Error 404: Ruta no encontrada');
  });

export default app;