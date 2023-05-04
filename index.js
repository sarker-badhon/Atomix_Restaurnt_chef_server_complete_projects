const express = require('express')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 5500


app.use(cors())
const allChefData = require("./chefs.json")
    app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/data', (req, res) => {
  res.send(allChefData)
})

app.get('/data/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log(`params ${id}`);
  const d =allChefData.find(chef => chef.id ===id)
  res.send(d)
})

              // Recipes data

  const allRecipesData = require("./food.json")

    app.get('/recipesData', (req, res) => {
    res.send(allRecipesData)
  })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})