const { usermodel } = require("../../../models/usermodels");

const usersignin=async(req,res)=>{
const{name,email,password,phoneNumber,age}= req.body; 
const bcrypt = require("bcrypt")


console.log(req.body);
const userexist = await usermodel.findOne({email});
if (userexist) {
    return res.status(500).send("already exist");
} 


try {
    bcrypt.hash(password,5,async (err, hash) =>{
        if (err) {
         return    res.status(400),send("error while hashing ")
        } else {
             const user =new usermodel({
        name,
        email,
        password:hash,
        phoneNumber,
        age,
    })
   
             await user.save()
    console.log("user");
        }
    // Store hash in your password DB.
});
   
    
} catch (error) {
    console.log(error);
    
}

}
//destructering =>if data is coming we know that what is inside it  

const userlogin =(req,res)=>{

}
module.exports={usersignin}
