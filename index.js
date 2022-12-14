import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Its Works 2')
})

app.listen(80, () => console.log('Ready'))
