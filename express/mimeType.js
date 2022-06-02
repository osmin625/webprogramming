const express = require('express');
const fs = require('fs');
const app = express();

app.get('/image',(req,res) => {
    fs.readFile('image.png',(error,data) => {
        res.type('image/png');
        res.send(data);
    });
});
app.get('/audio',(req,res) => {
    fs.readFile('audio.mp3',(error,data) => {
        res.type('audio/mpeg');
        res.send(data);
    });
});

app.listen(52273,()=>{
    console.log('server running at http://127.0.0.1:52273');
})