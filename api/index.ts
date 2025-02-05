import { VercelRequest, VercelResponse } from '@vercel/node'
import express from 'express'
import cors from 'cors'
import numberClasifier from './src/routes/numberClassifier'

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(numberClasifier)

app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.status(200).json({
    message:
      'Welcome to the Number Classification API! Use /api/classify-number?number=<your_number>'
  })
})

export default (req: VercelRequest, res: VercelResponse) => {
  app(req as any, res as any) // Ensure correct Express compatibility
}
