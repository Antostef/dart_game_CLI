const express = require('express')
const app     = express()
const router  = require('./router.js')
const nunjucks      = require('nunjucks')

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use('/', router)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})