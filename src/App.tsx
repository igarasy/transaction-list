import React from 'react'
import TransactionsList from './components/pages/TransactionsList/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTransaction from './components/pages/CreateTransaction/index'
import { SnackbarProvider } from 'notistack'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
function App() {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <SnackbarProvider>
          <Routes>
            <Route path="/" element={<TransactionsList />} />
            <Route path="/create" element={<CreateTransaction />} />
          </Routes>
        </SnackbarProvider>
      </>
    </BrowserRouter>
  )
}

export default App
