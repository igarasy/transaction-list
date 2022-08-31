import { rest } from 'msw'
import { transactionResponse } from './dataSource'

const postTransactionsUrl = 'http://localhost:1337/api/transactions'
export const postTransactionsHandler = rest.post(postTransactionsUrl, (req, res, ctx) => res(ctx.status(200)))

const getTransactionsUrl = 'http://localhost:1337/api/transactions'
export const getTransactionsHandler = rest.get(getTransactionsUrl, (req, res, ctx) => res(ctx.json(transactionResponse), ctx.status(200))
)
