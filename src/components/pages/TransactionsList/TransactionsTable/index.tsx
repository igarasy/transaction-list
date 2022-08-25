import React from 'react'
import * as S from './styled'

const TransactionsTable = () => {
  return (
    <S.Card>
      <S.Wrapper>
        <S.Table>
          <S.TableHeaderRow>
            <S.TableHeader>Nome do estabelecimento</S.TableHeader>
            <S.TableHeader>Data da compra</S.TableHeader>
            <S.TableHeader>Valor</S.TableHeader>
            <S.TableHeader>Meio de pagamento</S.TableHeader>
          </S.TableHeaderRow>
          <S.TableRow>
            <S.TableCell>MERCADO LIVRE PAGAMENTOS</S.TableCell>
            <S.TableCell>20/10/2015</S.TableCell>
            <S.TableCell>R$ 10,26</S.TableCell>
            <S.TableCell>Boleto</S.TableCell>
          </S.TableRow>
        </S.Table>
      </S.Wrapper>
    </S.Card>
  )
}

export default TransactionsTable
