import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

const app = express()

const port = process.env.PORT || 3001

app.listen(port,()=> console.log(`Server listening on port ${port}`))