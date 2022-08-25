import axios from "axios"
import { dtoTransactionsReponse } from "./dtoTransactionsResponse"

export class TransactionService {
static async getTransactions(){
  const url = 'http://localhost:1337/api/transactions'
  const  response   = await axios.get<dtoTransactionsReponse>(url)
  return response.data
}
}