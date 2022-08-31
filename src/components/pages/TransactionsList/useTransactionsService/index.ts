import * as React from 'react'
import { TransactionService } from '../../../../service'
import { Data } from '../../../../service/dtoTransactionsResponse'

export function useTransactionsService() {
  const [data, setData] = React.useState<Data[]>()
  const [loading, setLoading] = React.useState(false)

  const getTransactions = React.useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await TransactionService.getTransactions()
      setData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    getTransactions()
  }, [getTransactions])

  return {
    loading,
    getTransactions,
    data,
  }
}
