const express = require('express')
const server = express()
server.use(express.json())

// Files of the Routes
const color_routes = require('./api/color/color.routes')

// Routes
server.use('/color', color_routes)

const port = 3001
server.listen(port, () => {
  console.log(`Server is running on: ${port}`)
})
