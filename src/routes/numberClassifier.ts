import { Router, Request, Response } from 'express'
import { isArmstrong, isPerfect, isPrime, getDigitSum, getFunFacts } from '../utils/classify'

const router = Router()

router.get('/api/classify-number', async (req: Request, res: Response): Promise<void> => {
  const { number } = req.query

  if (!number || isNaN(Number(number)) || !Number.isInteger(Number(number))) {
    res.status(400).json({ number, error: true })
    return
  }

  const num = Number(number)
  const properties: string[] = []

  if (num < 0) {
    // Negative numbers cannot be armstrong, prime, or perfect
  } else {
    if (isArmstrong(num)) properties.push('armstrong')
    if (isPrime(num)) properties.push('prime')
    if (isPerfect(num)) properties.push('perfect')
  }

  if (num % 2 === 0) properties.push('even')
  else properties.push('odd')

  const response = {
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties,
    digit_sum: getDigitSum(num),
    fun_fact: await getFunFacts(num)
  }

  res.status(200).json(response)
})

export default router
