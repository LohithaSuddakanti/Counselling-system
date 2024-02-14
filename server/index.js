const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')

const app=express()

app.use(cors())
app.use(express.json())
const client =new MongoClient('mongodb+srv://admin1:admin1@cluster0.9cxyyk2.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling1')
const col = db.collection('register')

//col.insertOne({'student':"123"})

app.post('/register', (req, res)=>{
    col.insertOne(req.body)
    console.table(req.body)
    res.send('Inserted succesfully')
})

app.get('/retrieve', async (req, res)=>{
    const result= await col.find().toArray()
    console.table(result)
    res.send(result)
})
app.get('/',(req,res)=>{
    res.send('<h1>Hello World<h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h2>This in about page<h2>')
})
app.listen('8080', ()=>{
    console.table('Server is running...')})
    
