import React from 'react'
import * as S from './styled'
import { Link } from 'react-router-dom';
import TransactionsTable from '../TransactionsTable';

const Transaction = () => {
  return (
    <S.Wrapper>
    <S.Container>
      <S.Header>
        <S.Title>Listagem de transações</S.Title>
        <Link to={`create`}>
          <S.StyledButton >criar transação</S.StyledButton>
        </Link>
      </S.Header>
      <TransactionsTable />
    </S.Container>
  </S.Wrapper>
  )
}

export default Transaction