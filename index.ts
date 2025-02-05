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
  res.status(200).send('Hello World')
})

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

export default app
