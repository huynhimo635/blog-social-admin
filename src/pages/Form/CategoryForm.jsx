import { useEffect, useMemo } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import _ from 'lodash'

import TextField from '../../components/Form/TextField'
import Dialog from '../../components/Common/Dialog'

import categoryApi from '../../api/category'

import { setLoading } from '../../store/loadingSlice'
import { setErrorMessage, setSuccessMessage } from '../../store/popupSlice'

function CategoryForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const fetchDataList = useOutletContext()

  const schema = yup.object().shape({
    name: yup.string().required('This field is required')
  })

  const categoryForm = useForm({
    shouldUnregister: false,
    resolver: yupResolver(schema),
    defaultValues: { name: '' }
  })

  const isCreating = useMemo(() => {
    return _.isNil(id)
  }, [id])

  const onCreate = async (formData) => {
    dispatch(setLoading(true))
    try {
      await categoryApi.add(formData)
      dispatch(setSuccessMessage('Create a new category successfully'))
      categoryForm.reset({ name: '' })
    } catch (error) {
      const { response } = error
      dispatch(setErrorMessage(response.message))
    }
    dispatch(setLoading(false))
  }

  const handleClose = () => {
    if (fetchDataList) {
      fetchDataList()
    }
    navigate(-1)
  }

  const onUpdate = async (formData) => {
    dispatch(setLoading(true))
    try {
      const { data } = await categoryApi.update(id, formData)
      dispatch(setSuccessMessage(data.message))
      handleClose()
    } catch (error) {
      const { response } = error
      dispatch(setErrorMessage(response.message))
    }
    dispatch(setLoading(false))
  }

  useEffect(() => {
    const fetchData = async (categoryId) => {
      dispatch(setLoading(true))
      try {
        const { data } = await categoryApi.get(categoryId)
        categoryForm.setValue('name', data.name)
      } catch (error) {
        const { response } = error
        dispatch(setErrorMessage(response.message))
      }
      dispatch(setLoading(false))
    }
    if (id) {
      fetchData(id)
    }
  }, [])

  const buttons = [
    {
      children: isCreating ? 'Create' : 'Update',
      type: 'button',
      color: 'white',
      textColor: 'main_color',
      onClick: categoryForm.handleSubmit(isCreating ? onCreate : onUpdate)
    }
  ]

  return (
    <Dialog
      title={id ? 'Update Category' : 'Create Category'}
      buttons={buttons}
      onClose={handleClose}
    >
      <FormProvider {...categoryForm}>
        <TextField
          label="Category Name"
          type="string"
          name="name"
          placeholder="Text here..."
          required
          autoFocus
        />
      </FormProvider>
    </Dialog>
  )
}

export default CategoryForm
