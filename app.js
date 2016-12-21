const express = require('express')
const app = express()
const color = require('chalk')

const PORT = 3000
app.listen(PORT, () => {
  console.log(color.green(`Listening on port ${PORT}`))
})
