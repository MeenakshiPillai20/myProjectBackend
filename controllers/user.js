const {insertToDb, findOneFromDb} = require("../database/connection")
const bcrypt = require("bcrypt");

// Insert Employee Data
const insertUserData = async function(req,res){
    const userData = req.body;
    const email = userData.email;
    const password = userData.password;
   const roundsOfSalt = 10;
   const data = {email:email}
  bcrypt.hash(password,roundsOfSalt,function(err,hashedPassword){
      if(err){
        console.log(err)
      }
      else{
        console.log("Here is a hashed password =>",hashedPassword);
        userData.hashedPassword = hashedPassword;
      }
    })
    try {
          const user = await findOneFromDb(data)
          if (user){
            return res.send({message:"User already registerd"})
          }
          else{
            const insertResponse = await insertToDb(userData)
            return res.status(200).send({message:"User Registered Successfully"});
          }
          
    } catch (error) {
             console.log("Error occur in saving data",error)
             return res.status(200).json({message:"something went wrong"})
   }
  
}

 module.exports = { 
    insertUserData
}

