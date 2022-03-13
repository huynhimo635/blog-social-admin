import { useContext } from 'react'

import FormContext from './Context'

function useFormContext() {
  const providerValue = useContext(FormContext)
  return providerValue
}

export { useFormContext, FormContext }
