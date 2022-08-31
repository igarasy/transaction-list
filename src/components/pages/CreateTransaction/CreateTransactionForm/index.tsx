import React from 'react'
import * as S from './styled'
import { useLocalForm } from './useLocalForm'
import { Link } from 'react-router-dom'
import { useCreateTransactionService } from '../useCreateTransactionService'

const InputPage = () => {
  const service = useCreateTransactionService()
  const form = useLocalForm({
    onSubmit: () => service.postTransaction(form.values),
  })

  const handleClick = () =>{
    form.submitForm()
    if(form.isValid){
      form.resetForm()
    }
  }

  return (
    <S.FormTransaction
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <S.InputContainer>
        <S.InputWrapper>
          <S.Label >Nome do estabelecimento</S.Label>
          <S.Input
            name="establishment_name"
            type="text"
            aria-label='establishment_name'
            value={form.values.establishment_name}
            onChange={form.handleChange}
          />
          {form.touched.establishment_name &&
            !!form.errors.establishment_name && (
              <S.Error>{form.errors.establishment_name}</S.Error>
            )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Valor</S.Label>
          <S.Input
            type="number"
            name="amount"
            value={form.values.amount}
            onChange={form.handleChange}
          />
          {form.touched.amount && !!form.errors.amount && (
            <S.Error>{form.errors.amount}</S.Error>
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Meio de pagamento </S.Label>
          <S.Select
            name="payment_method"
            value={form.values.payment_method}
            onChange={form.handleChange}
          >
            <option></option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Boleto">Boleto</option>
          </S.Select>
          {form.touched.payment_method && !!form.errors.payment_method && (
            <S.Error>{form.errors.payment_method}</S.Error>
          )}
        </S.InputWrapper>
      </S.InputContainer>
      <S.CreateButton type="submit" onClick={handleClick}>
        criar transação
      </S.CreateButton>
      <Link to={`/`} style={{ textDecoration: 'none' }}>
        <S.CancelButton>cancelar</S.CancelButton>
      </Link>
    </S.FormTransaction>
  )
}

export default InputPage
