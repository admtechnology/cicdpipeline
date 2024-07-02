
const express = require('express')
const app = express()
const port =4000

app.get('/',(req,res)=>{
    res.send("this this test api ")
})


app.listen(port,()=>{
   console.log('is is runung on port number ',port)
})
