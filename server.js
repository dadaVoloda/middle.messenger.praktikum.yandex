const fallback = require('express-history-api-fallback')
const express = require('express')

const app = express()
const root = __dirname + '/dist'
const PORT = process.env.PORT || 3000

app.use(express.static(root))
app.use(fallback('index.html', { root }))

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
