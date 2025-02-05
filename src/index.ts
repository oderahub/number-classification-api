import express, { Request, Response } from 'express'
import cors from 'cors'
import numberClassifier from './routes/numberClassifier'

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(numberClassifier)

app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.status(200).json({
    message:
      'Welcome to the Number Classification API! Use /api/classify-number?number=<your_number>'
  })
})

export default app
