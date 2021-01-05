const express=require('express')
const app=express()
const port=3000

data={
    list:'Server is working fine'
}
app.use((req,res,next)=>{
    console.log(req.headers)
    next()
})
app.get('/get',(req,res)=>{
    
    res.status(200).send(data)
})

app.listen(port,()=>{
    console.log("Server is listening"+port)

})