/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';

mongoose
  .connect(process.env.CONNECTDATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit('connected');
  })
  .catch((e) => console.log(e, 'Erro ao conectar com banco de dados'));

const port = 3001;

app.on('connected', () => {
  app.listen(port, () => {
    console.log(`servidor executado em http://localhost:${port}`);
  });
});
