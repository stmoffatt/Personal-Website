const app = require('./app')

const port = process.env.PORT || 3001

app.listen(port, function() {
  console.log('Todo Server listening on port 3001!')
})
