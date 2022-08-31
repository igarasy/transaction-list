import axios from 'axios'
import { CreateTransaction } from './dtoCreateTransaction'
import { DtoTransactionsResponse } from './dtoTransactionsResponse'

export class TransactionService {
  static async getTransactions() {
    const url = 'http://localhost:1337/api/transactions'
    const response = await axios.get<DtoTransactionsResponse>(url)
    return response.data
  }

  static async postTransaction(data: CreateTransaction) {
    const url = 'http://localhost:1337/api/transactions'
    const response = await axios.post(url,{data})
    return response
  }
}
