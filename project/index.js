const main_controller = require('./controllers/main_controller');
const analysis_controller = require('./controllers/analysis_controller');
const review_controller = require('./controllers/review_controller');
const find_idpw_controller = require('./controllers/find_idpw_controller');
const register_controller = require('./controllers/register_controller');

const express = require("express");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchima = new Schema({
    title: String,
    body: String
})
const app = new express();

mongoose.connect('mongodb://localhost:27017/Otion',{useNewUrlParser:true})

app.set('view engine','ejs'); //view engine 으로 ejs 설정해주기
app.use(express.static("assets")); //고정 폴더 asset 추가해주기
app.use(express.urlencoded({ extended: true }));

app.listen(4040); //port 설정

app.get('/',main_controller.render)
app.get('/main',main_controller.render)
app.get('/analysis',analysis_controller.render)
app.get('/review',review_controller.render)
app.get('/register',register_controller.render)
