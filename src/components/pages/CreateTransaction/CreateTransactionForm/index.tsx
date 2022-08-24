import React from 'react'
import * as S from './styled'
import { Button } from '@mui/material'
import { useLocalForm } from './useLocalForm'
import { Link } from 'react-router-dom';
const InputPage = () => {
  const form = useLocalForm({
    onSubmit: () => {},
  })

  function handleSubmit() {
    return console.log('submit')
  }

  return (
        <S.FormTransaction onSubmit={handleSubmit}>
          <S.InputContainer>
            <S.InputWrapper>
              <S.Label >
                Nome do estabelecimento
              </S.Label>
              <S.Input
              name='establishment_name'
                type="text"
                value={form.values.establishment_name}
                onChange={form.handleChange}
              />
              {form.touched.establishment_name && !!form.errors.establishment_name && <S.Error>{form.errors.establishment_name}</S.Error>}
            </S.InputWrapper>
            <S.InputWrapper>
            <S.Label>Valor</S.Label>
              <S.Input
                type='number'
                name='amount'
                value={form.values.amount}
                onChange={form.handleChange}
              />
              {form.touched.amount && !!form.errors.amount && <S.Error>{form.errors.amount}</S.Error>}
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>Meio de pagamento </S.Label>
              <S.Select
                name='payment_method'
                value={form.values.payment_method}
                onChange={form.handleChange}
              >
                <option value="credit_card">Cartão de Crédito</option>
                <option value="boleto">Boleto</option>
              </S.Select>
              {form.touched.payment_method && !!form.errors.payment_method && <S.Error>{form.errors.payment_method}</S.Error>}
            </S.InputWrapper>
          </S.InputContainer>
          <S.CreateButton type="submit" onClick={(e) => {e.preventDefault(); form.handleSubmit(); console.log(form.values)}}>criar transação</S.CreateButton>
          <Link to={`/`} style={{textDecoration: "none"}}>
          <S.CancelButton>cancelar</S.CancelButton>
          </Link>
        </S.FormTransaction>
  )
}

export default InputPage
