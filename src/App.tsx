import React from 'react'
import Transaction from './components/pages/TransactionsList/Transaction/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTransaction from './components/pages/CreateTransaction/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Transaction />} />
          <Route path="/create" element={<CreateTransaction />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
