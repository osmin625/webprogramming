const express = require('express')
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
mongoose.connect('mongodb://localhost:27017/my_database',{useNewUrlParser:true})
const validateMiddleWare = require('./middleware/validationMiddleware')
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const storeUserController = require('./controllers/storeUser')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(fileUpload())
app.use('/posts/store',validateMiddleWare)
app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})
app.get('/auth/register',newUserController)
app.get('/auth/login',loginController)

app.get('/',homeController)
app.get('/post/:id',getPostController)
app.get('/posts/new',newPostController)
app.post('/posts/store',storePostController)

app.post('/users/register',storeUserController)
app.post('/users/login',loginUserController)
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