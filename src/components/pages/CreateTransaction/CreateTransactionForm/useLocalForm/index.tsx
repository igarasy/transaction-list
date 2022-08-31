import { useFormik } from 'formik'
import { LocalFormValues } from './types'
import { validationSchema } from './validations'

export interface UseLocalFormProps {
  onSubmit: (value: LocalFormValues) => void
}

export function useLocalForm(props: UseLocalFormProps) {
  const form = useFormik<LocalFormValues>({
    initialValues: {
      establishment_name: '',
      amount: 0,
      payment_method: ''
    },
    validationSchema,
    onSubmit: props.onSubmit,
    validateOnMount: true
  })
  
  return {
    ...form
  }
}