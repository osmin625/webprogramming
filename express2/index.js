const express = require('express')
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
mongoose.connect('mongodb+srv://osmin625:osmin625@cluster0.mkmcxir.mongodb.net/test',{useNewUrlParser:true})
const validateMiddleWare = require('./middleware/validationMiddleware')
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const storeUserController = require('./controllers/storeUser')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const logoutController = require('./controllers/logout')

global.loggedIn = null;
let port = process.env.PORT;
if(port == null || port == ''){
    port = 4000;
}

app.listen(port,()=>{
    console.log('App listening...')
})
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(fileUpload())
app.use('/posts/store',validateMiddleWare)
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use("*", (req,res,next) =>{
    if(req.session.userId)
        loggedIn = req.session.userId;
    next()
})

app.get('/auth/register',redirectIfAuthenticatedMiddleware,newUserController)
app.get('/auth/login',redirectIfAuthenticatedMiddleware,loginController)
app.get('/auth/logout', logoutController)

app.get('/',homeController)
app.get('/post/:id',getPostController)
app.get('/posts/new',authMiddleware,newPostController)
app.post('/posts/store',authMiddleware,storePostController)

app.post('/users/register',redirectIfAuthenticatedMiddleware,storeUserController)
app.post('/users/login',redirectIfAuthenticatedMiddleware,loginUserController)
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//app.post('/posts/store', async(req,res)=>{
//    console.log(req.body)
//    await BlogPost.create(req.body)
//    res.redirect('/')
//})
// app.post('/posts/store',(req,res)=>{
//     let image = req.files.image;
//     image.mv(path.resolve(__dirname,'/public/assets/img',image.name),async(error)=>{
//             await BlogPost.create({
//                 ...req.body,
//                 image:'/assets/img/' + image.name
//             })
//             res.redirect('/')
//         })
//     })
// app.get('/',async (req,res)=>{
//     const blogposts=await BlogPost.find({})
//     console.log(blogposts)
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
//     res.render('index',{
//         blogposts: blogposts
//     });
// })

// app.get('/post/:id',async (req,res)=>{
//     const blogpost = await BlogPost.findById(req.params.id)
//     res.render('post',{
//         blogpost
//     })
// })