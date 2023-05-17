import mongoose from "mongoose";
import bcrypt from "bcrypt"
const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type:String,
        required: true,
        unique: true,//bir kişi tarafından kullanılır
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
},

{timestams: true}//create ve update tarihleri otomatk  olarak iki alan ekler mongoya
);
userSchema.pre("save",function(next){     //hashleme işlemi
    const user = this;
    bcrypt.hash(user.password,10,(err,hash)=>{
        user.password = hash;
        next();//kodun devamonon çalışması için
    })
})

const User = mongoose.model("User",userSchema);
export default User;