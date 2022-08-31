import React from 'react'
import { render } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import CreateTransactionForm from '../CreateTransactionForm'

export function mountComponent() {
  const form = render(
    <BrowserRouter>
      <SnackbarProvider>
        <CreateTransactionForm />
      </SnackbarProvider>
    </BrowserRouter>,
  )
  const name = form.getByLabelText('establishment_name')
  const amount = form.getByLabelText('amount')
  const paymentMethod = form.getByLabelText('payment_method')
  const concludeButton = form.getByRole('button', {  name: /criar transação/i})
  const cancelButton = form.getByRole('button', {  name: /cancelar/i})

  return {
    render,
    name,
    amount,
    paymentMethod,
    concludeButton,
    cancelButton
  }
}
