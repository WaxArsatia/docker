import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Its Works New 2')
})

app.listen(80, () => console.log('Express Ready'))
