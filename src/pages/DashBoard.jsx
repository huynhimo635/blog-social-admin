import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import TextField from '../components/Form/TextField'
import Layout from '../components/Common/Layout'

function DashBoard() {
  const schema = yup.object().shape({
    category: yup.string().required(),
    product: yup.number().required()
  })
  const testForm = useForm({
    shouldUnregister: false,
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log('data :>> ', data)
  }

  return (
    <FormProvider {...testForm}>
      <Layout>
        <form action="">
          <TextField label="Category" name="category" placeholder="Text here..." required />
          <TextField
            label="Product"
            type="number"
            name="product"
            placeholder="Text here..."
            required
          />
          <button type="submit" onClick={testForm.handleSubmit(onSubmit)}>
            Submit
          </button>
        </form>
      </Layout>
    </FormProvider>
  )
}

export default DashBoard
