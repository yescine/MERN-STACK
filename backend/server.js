const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true})

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('mongoose db connected success')
})

const exerciseRouter = require('./routes/exercice')
const userRouter = require('./routes/user')

app.use('/exercice', exerciseRouter)
app.use('/user',userRouter)

//
app.listen(port,()=>{
    console.log(`listening on port : ${port}`)
})
