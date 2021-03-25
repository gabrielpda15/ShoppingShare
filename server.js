const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(`${__dirname}/dist/ngRandomFeeders`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/ngRandomFeeders/index.html`));
});

app.listen(process.env.PORT || 8080);
