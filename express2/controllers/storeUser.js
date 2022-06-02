const path = require('path')
const User = require('../models/User')

module.exports = (req,res)=>{
    User.create(req.body,(error, user)=>{
        if(error){
            console.log(error)
            return res.redirect('/auth/register')
        }
        res.redirect('/')
    })
}