import express from 'express'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())

app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
