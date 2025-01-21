const express = require('express');
const app = express();
require('dotenv').config()

app.get('/', (req,res) =>{
  res.send('Hello World!');
})

app.get('/twitter',(req,res) =>{
  res.send('Twitter API');
})

app.get('/google',(req,res) =>{
  res.send('`<h1>Goole API</h1>`');
})

app.listen(process.env.PORT,() =>{
  console.log(`Server listening on port ${process.env.PORT}`);
})
