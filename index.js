const express = require('express')
var cors = require('cors')
// const data = require('./data.json')
const app = express()
const port = 3000


app.use(cors())
const allChefData = require("./data.json")
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.send(allChefData)
  })
  
//   app.get('/data/:id', (req, res) => {
//       const id = parseInt(req.params.id)
//       console.log(`params ${id}`);
//       const d = data.find(job=>job.id===id )||{message: "data not found!"};
//       res.send(d)
//   })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})