const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(`$/dist/ngShoopingShare`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(`/dist/ngShoopingShare/index.html`));
});

app.listen(process.env.PORT || 8080);
