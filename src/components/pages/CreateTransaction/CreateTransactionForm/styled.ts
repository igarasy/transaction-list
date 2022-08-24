import styled from 'styled-components'

export const FormTransaction = styled.form`
  max-width: 1280px;
  margin-top: 30px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 313px;
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1280px;
`

export const Select = styled.select`
  background: #ffffff;
  height: 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
`

export const Input = styled.input`
  background: #ffffff;
  border-radius: 5px;
  padding: 0.8rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: none;
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 5px;
`
export const Error = styled.p`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
margin-top: 9px;
color: #FF0000;

`

export const CreateButton = styled.button`
font-family: 'Roboto', sans-serif;
width: 189px;
height: 56px;
background: #4F46E5;
border-radius: 8px;
border: none;
font-size: 22px;
color: #FFFFFF;
margin-top: 60px;
margin-right: 13px ;
cursor: pointer;
`

export const CancelButton = styled.button`
font-family: 'Roboto', sans-serif;
width: 189px;
height: 56px;
background: white;
border-radius: 8px;
border: 1px solid #4F46E5;
font-size: 22px;
color: #4F46E5;
margin-top: 60px;
margin-right: 13px ;
cursor: pointer;
`