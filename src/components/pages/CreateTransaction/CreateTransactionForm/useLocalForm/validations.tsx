import * as yup from 'yup'

export const validationSchema = yup.object({
  establishment_name: yup
    .string()
    .required('Este campo é obrigatório'),
  amount: yup.string().required('Este campo é obrigatório'),
  payment_method: yup.string().required('Este campo é obrigatório')

})
