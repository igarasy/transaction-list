import React from 'react'
import * as S from './styled'
import CreateTransactionForm from './CreateTransactionForm';
const InputPage = () => {

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
