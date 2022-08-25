import * as React from 'react'
import { TransactionService } from '../../service'
import { dtoTransactionsReponse } from '../../service/dtoTransactionsResponse'

export function useGetTransactions() {
  const [ data, setData ] = React.useState<dtoTransactionsReponse>()
  const [loading, setLoading] = React.useState(false)

  const getTransactions = React.useCallback(async () => {
    try {
      setLoading(true)
      const response = await TransactionService.getTransactions()
      setData(response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    getTransactions,
    data,
  }
}
