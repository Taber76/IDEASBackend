const express = require('express')
const cors = require('cors')
const treblle = require('@treblle/express') // Creates API documentation

const { staticFiles, port, treblleApiKey, treblleProjectId } = require('./config/environment')
const transactionsRoute = require('./routes/transactionsRoute')
const usersRoute = require('./routes/usersRoute')
const adminRoute = require('./routes/adminRoute')

const app = express()

// ---------------------- MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(
  treblle({
    apiKey: treblleApiKey,
    projectId: treblleProjectId
  }))

// ---------------------- ROUTES
app.use('/api', transactionsRoute)
app.use('/api', usersRoute)
app.use('/api', adminRoute)
app.use('/', express.static(staticFiles))

// ---------------------- START SERVER
app.listen(port, () => {
  console.log(`El servidor está funcionando en http://localhost:${port}`)
})
