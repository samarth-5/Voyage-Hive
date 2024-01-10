const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");//username and pwd automatically defined

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    }
});

userSchema.plugin(passportLocalMongoose);//hashing,salting automatically done
module.exports = mongoose.model('User',userSchema);