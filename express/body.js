const express = require('express');
const morgan = require('morgan')
const app = express();
app.use('/',express.static('public'));
app.use(morgan('combined'));
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res) => {
    let output = '';
    output += '<form method="post">';
})