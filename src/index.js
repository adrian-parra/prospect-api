import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

// Middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export { prisma }