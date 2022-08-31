import { server } from './msw/server'
import { mountComponent } from './helpers'
import "@testing-library/jest-dom/extend-expect"
import { screen, waitFor } from '@testing-library/react'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'warn' })
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
  jest.clearAllMocks()
})

describe('Transactions List', () => {
  it('should show transaction date on the table', async () => {
    const comp = await mountComponent()
      expect(comp.transactionDate).toHaveTextContent(/30\/08\/2022/i)
  })
  it('should show transaction stablishment name on the table', async () => {
    const comp = await mountComponent()
      expect(comp.stablishmentName).toHaveTextContent(/amazon/i)
  })
  it('should show transaction value name on the table', async () => {
    const comp = await mountComponent()
    expect(comp.transactionValue).toHaveTextContent(/r\$ 1000/i)
  })
  it('should show transaction payment method name on the table', async () => {
    const comp = await mountComponent()
    expect(comp.transactionPayment).toHaveTextContent(/cartão de crédito/i)
  })
})

export default {}
