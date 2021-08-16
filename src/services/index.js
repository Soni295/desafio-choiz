import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://run.mocky.io/v3/'
})
export const getTableOfPrices = () => (
  Api.get('1f00949f-adc2-4484-ad6d-4f565e82ad30')
)
export const getFrequentQuestions = () => (
  Api.get('6f0fb5ae-1758-4537-84c7-f6669edd614f')
)
