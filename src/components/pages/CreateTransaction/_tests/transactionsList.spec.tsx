import { server } from './msw/server'
import { mountComponent } from './helpers'
import '@testing-library/jest-dom/extend-expect'
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { wait } from '@testing-library/user-event/dist/utils'
import axios from 'axios'

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

describe('Create transaction form', () => {
  it('should show all form fields', () => {
    const form = mountComponent()
    expect(form.name).toBeInTheDocument()
    expect(form.amount).toBeInTheDocument()
    expect(form.paymentMethod).toBeInTheDocument()
  })

  it('should show all buttons', () => {
    const form = mountComponent()
    expect(form.concludeButton).toBeInTheDocument()
    expect(form.cancelButton).toBeInTheDocument()
  })

  it('should call handleClick when click in conclude button', async () => {
    const postTransactionMock = jest.spyOn(axios, 'post')
    const form = mountComponent()
    userEvent.type(form.name, 'Amazon')
    userEvent.type(form.amount, '100')
    userEvent.selectOptions(form.paymentMethod, 'Cartão de Crédito')
    userEvent.click(form.concludeButton)
    await waitFor(()=>{
      expect(postTransactionMock).toBeCalled()
    })
  })
})
export default {}
