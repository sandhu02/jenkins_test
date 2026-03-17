const express = require('express');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, "0.0.0.0" ,() => {
  console.log(`Server is running on port:${port}`);
});
