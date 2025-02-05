import axios from 'axios'

const isPrime = (num: number): boolean => {
  if (num < 2) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

const isPerfect = (num: number): boolean => {
  if (num <= 0) return false
  let sum = 1
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i
      if (i !== num / i) sum += num / i
    }
  }
  return sum === num
}

const isArmstrong = (num: number): boolean => {
  if (num < 0) return false
  const digits = num.toString().split('')
  const power = digits.length
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0)
  return sum === num
}

const getDigitSum = (num: number): number => {
  return Math.abs(num)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0)
}

const getFunFacts = async (num: number): Promise<string> => {
  const response = await axios.get(`http://numbersapi.com/${num}/math`)
  return response.data
}

export { isPrime, isPerfect, isArmstrong, getDigitSum, getFunFacts }
