import { useSnackbar } from 'notistack'
import * as React from 'react'
import { TransactionService } from '../../../../service'
import { CreateTransaction } from '../../../../service/dtoCreateTransaction'

export function useCreateTransactionService() {
  const [loading, setLoading] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar()
 
  const postTransaction = React.useCallback(async (data: CreateTransaction) => {
    try {
      setLoading(true)
      await TransactionService.postTransaction(data)
      enqueueSnackbar('Transação criada com sucesso', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Erro ao criar transação', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }, [enqueueSnackbar])

  return {
    loading,
    postTransaction,
  }
}
