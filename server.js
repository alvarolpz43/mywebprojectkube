import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send('Hello World Kubernetes')
})

app.listen(3000)

console.log(`server on port 3000`)