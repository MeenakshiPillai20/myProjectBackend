const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require('./routes/user')
const loginRouter = require('./routes/login')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(userRouter)
app.use(loginRouter)

// app.post('/demo',(req,res) => {
//   res.json(req.body)
//   console.log(req.body);
// })
app.listen(4000,function(){
    console.log("Server is started at port 4000 : http://localhost:4000")
});