import axios from "axios"



export class TransactionService {
static async getTransactions(){
  const url = 'http://localhost:1337/api/transactions'
  const  response  = await axios.get(url)
  return response.data
}
}