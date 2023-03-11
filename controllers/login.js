const { findOneFromDb} = require("../database/connection")

// Insert Employee Data
const loginUserData = async function(req,res){
    const userData = req.body;
    const {email,password} = userData
 
    const data = {email,password}
    try {
          const user = await findOneFromDb(data)
          console.log(user.name)
          const username = user.name;
          if (user ){
            return res.status(200).send({message:"User Login Successfully",username});
          }
          else{
            return res.send({message:"User Login Unsuccessful. Please try again..."})
          }
          
    } catch (error) {
             console.log("Error occur in saving data",error)
             return res.status(200).json({message:"Something went wrong"})
   }
  
}

 module.exports = { 
    loginUserData
}

