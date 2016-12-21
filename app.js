const express = require('express')
const app = express()
const color = require('chalk')

const PORT = 3000
const server = app.listen(PORT, () => {
  console.log(color.green(`Listening on port ${PORT}`))
})

// Handle Ctrl-C
process.on('SIGINT', () => {
  server.close( () => {
    console.log(color.green('\nServer successfully interrupted'))
  })
})
