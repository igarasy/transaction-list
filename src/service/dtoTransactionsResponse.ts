export interface Transactions{
  amount: number
  createdAt: string
  establishment_name: string
  payment_method: string
  publishedAt: string
  updatedAt: string
}

export interface Data{
id: number
attributes: Transactions
}
export interface DtoTransactionsResponse{
data: Data[]
}

