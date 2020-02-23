const express   = require('express')
const app       = express()
const router    = require('./router.js')
const nunjucks  = require('nunjucks')

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use('/', router)

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})

// changer tout les appels de routes
// ${var} how to call var
// TODO: faire une vraie presentation pour le lancement du serveur.
// TODO: faire un css basique pour les vues