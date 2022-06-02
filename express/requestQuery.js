const { application } = require('express');
const express = require('express');
const app = express();

app.get('/page/:id',(req,res) => {
    const id = req.params.id;
    res.send(`<h1>${id} Page</h1>`);
});

app.listen(52273,() =>{
    console.log('server running at http://127.0.0.1:52273');
})