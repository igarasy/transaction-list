import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const createTransactionWorker = setupWorker(...handlers)
