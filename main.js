const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

// change the default views folder to a new structure and use /src
app.set('views', __dirname+'/src/ejs');
app.use(express.static(__dirname + '/src'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/3d-artist', (req, res) => {
  res.render('art')
})

app.get('/programmer', (req, res) => {
  res.render('programmer')
})

app.listen(port, () => {
  console.log(`Web App started, listening on port:${port}\nAccess: http://localhost:${port}`)
})