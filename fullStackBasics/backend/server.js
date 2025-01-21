// const expres = require('express') both way of calling express is same
import express from 'express';

const app = express();

app.get('/api/jokes',(req,res) =>{
  const jokes =[
    {
      id:1,
      title:'Why was the math book sad?',
      punchline:'Because it had too many problems.',      
    },
    {
      id:2,
      title:'Why did the scarecrow win an award?',
      punchline:'Because he was outstanding in his field.',
    },
    {
      id:3,
      title:'Why don\'t scientists trust atoms?',
      punchline:'Because they make up everything.',
    }
  ];
  res.send(jokes);
})

const port = process.env.PORT|| 3000;

app.listen(port,() =>{
  console.log(`server is runnig on port ${3000}`);
})

