import * as React from 'react'
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
      amount: '',
      payment_method: ''
    },
    validationSchema,
    onSubmit: props.onSubmit
  })
  
  return {
    ...form
  }
}