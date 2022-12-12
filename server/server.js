const express = require('express') 
const app = express() 
var cors = require('cors') 

app.use(cors())

app.use(express.json()) 
app.use(express.urlencoded({extended: false})) 

app.get('/', function (req, res) {    
  
  try {   
    res.send('Hello World')  
  } catch (error) { 
    res.status(500).json({error: 'error message yoooo'})
    console.log(error) 
  }  
  
}) 


app.post('/test', function (req, res, next) {   
  try {
    throw new Error('BROKEN')
  } catch (error) {
    next(error)
    return res.status(400).send(error.message)
  }
  
    
  })   
  
app.listen(3000)  