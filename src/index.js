import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
