import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const getTransactionsWorker = setupWorker(...handlers)
