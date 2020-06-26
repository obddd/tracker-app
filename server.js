const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
