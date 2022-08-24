import React from 'react'
import * as S from './styled'
import { Button } from '@mui/material'

import { Link } from 'react-router-dom';
import CreateTransactionForm from './CreateTransactionForm';
const InputPage = () => {

  function handleSubmit() {
    return console.log('submit')
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>Criação de transações</S.Header>
        <CreateTransactionForm/>
      </S.Container>
    </S.Wrapper>
  )
}

export default InputPage
