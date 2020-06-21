
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connect to db
const uri = "mongodb://localhost:27017/JWT";
mongoose.connect(uri,{useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex: true },(error)=>{
    if(!error){
        console.log("DB connected successful")
    }else{
        console.log("Error connecting")
    }
})

//import router
const usersRouter = require('./routes/auth');
const postRouter = require('./routes/post');

//Route  middlewares
app.use('/api/user', usersRouter);
app.use('/api/post', postRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
