import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import TransactionsList from '..'
import { BrowserRouter, Router } from 'react-router-dom'

export async function mountComponent() {
  const renderer = render(
    <BrowserRouter>
      <SnackbarProvider>
        <TransactionsList />
      </SnackbarProvider>
    </BrowserRouter>,
  )
 
  const stablishmentName = await screen.findByRole('cell', {  name: /amazon/i})
  const row = screen.getByRole('row', {  name: /amazon 30\/08\/2022 r\$ 1000 cartão de crédito/i});
  const transactionDate = within(row).getByRole('cell', {  name: /30\/08\/2022/i});
  const transactionValue = within(row).getByRole('cell', {  name: /r\$ 1000/i});
  const transactionPayment = within(row).getByRole('cell', {  name: /cartão de crédito/i});
  
  return {
    renderer,
    transactionDate,
    stablishmentName,
    transactionValue,
    transactionPayment
  }
}
