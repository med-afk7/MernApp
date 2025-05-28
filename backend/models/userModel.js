const mongoose = require('mongoose')
const bcrypt = require ('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    email :{
        type:String,
        required :true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }


})

UserSchema.statics.signup = async function (email , password){

    //email validation 
const exists = await this.findOne({email})
if(exists){
    throw Error('Email already in use ')
}

if(!email || !password){
    throw Error ('All fields must be filled ')
}

if(!validator.isEmail(email)){
    throw Error('Not a valid email')
}

//password is strong 
if(!validator.isStrongPassword(password)){
    throw Error ('password not strong enough')
}




//genarating salt
const salt = await bcrypt.genSalt(10)
const hash = await bcrypt.hash(password , salt)

const user = await this.create({email, password :hash})
return user

}

//static login method

UserSchema.statics.login = async function (email, password ){
    if(!email || !password){
    throw Error ('All fields must be filled ')
}

const user = await this.findOne({email})

if(!user){
    throw Error('Incorrect email')
}

const match = await bcrypt.compare(password ,user.password)
if(!match){
    throw Error('Password is incorrect ')
}

    return user 

}







module.exports = mongoose.model('User' ,UserSchema );