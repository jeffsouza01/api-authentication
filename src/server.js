const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/', require('./routes'));


const port = process.env.PORT || 3333;

app.listen(port);
