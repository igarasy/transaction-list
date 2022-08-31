import moment from 'moment'
import React from 'react'
import { useTransactionsService } from '../useTransactionsService'
import * as S from './styled'

const TransactionsTable = () => {
  const { data } = useTransactionsService()
  return (
    <S.Card>
      <S.Wrapper>
        <S.Table>
          <thead>
            <S.TableHeaderRow>
              <S.TableHeader>Nome do estabelecimento</S.TableHeader>
              <S.TableHeader>Data da compra</S.TableHeader>
              <S.TableHeader>Valor</S.TableHeader>
              <S.TableHeader>Meio de pagamento</S.TableHeader>
            </S.TableHeaderRow>
          </thead>

          <tbody>
            {data &&
              data.map(({ attributes }) => {
                return [
                  <S.TableRow>
                    <S.TableCell>{attributes.establishment_name}</S.TableCell>
                    <S.TableCell>{moment(attributes.publishedAt).format('DD/MM/YYYY')}</S.TableCell>
                    <S.TableCell>R$ {attributes.amount}</S.TableCell>
                    <S.TableCell>{attributes.payment_method}</S.TableCell>
                  </S.TableRow>,
                ]
              })}
          </tbody>
        </S.Table>
      </S.Wrapper>
    </S.Card>
  )
}

export default TransactionsTable
