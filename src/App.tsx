import React from 'react'
import Transaction from './components/pages/TransactionsList/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTransaction from './components/pages/CreateTransaction/index'
import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Transaction />} />
            <Route path="/create" element={<CreateTransaction />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App
