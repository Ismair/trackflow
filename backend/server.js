const express = require('express');
const cors = require('cors');
const app = express();

// Configura o CORS para permitir solicitações de qualquer origem
app.use(cors());

// Ou você pode configurar um CORS mais restritivo
// app.use(cors({
//   origin: 'http://localhost:8081'  // Substitua pela URL do seu frontend
// }));

app.use(express.json());

// Exemplo de rota
app.post('/api/tracking', (req, res) => {
  
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log('Dados recebidos:', req.body);
  console.log('ip: ', ip)
  res.json({ message: 'Tracking recebido!' });
});

app.listen(5000, () => console.log('API rodando na porta 5000'));
