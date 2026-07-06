// Dummy file to satisfy CodeQL detection for testing
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Zero Friction DevSecOps Pipeline Demo');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
