require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 3000;

const app = express();

//====================
//MIDDLEWARE
//====================
app.use(
  express.static(path.join(__dirname, '../client/dist'), { index: false })
);
app.use(bodyParser.json());

//====================
//ENDPOINTS
//====================

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
