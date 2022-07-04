import { useEffect, useMemo } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import _ from 'lodash'

import TextField from '../../components/Form/TextField'
import MultipleTextField from '../../components/Form/MultipleTextField'
import Dialog from '../../components/Common/Dialog'

import userApi from '../../api/user'

import { setLoading } from '../../store/loadingSlice'
import { setErrorMessage, setSuccessMessage } from '../../store/popupSlice'
import Grid from '../../components/Common/Grid'

/**
   * {
        "followers": [],
        "followings": [],
        "_id": "6220b562b904c45efe0f9dcb",
        "username": "new user regs",
        "email": "newusertestreg@gmail.com",
        "avatar": "",
        "bio": "",
        "isAdmin": false,
        "website": "",
        "work": "",
        "city": "",
        "country": "",
        "github_link": "",
        "linkedin_link": "",
        "facebook_link": "",
        "createdAt": "2022-03-03T12:32:34.692Z",
        "updatedAt": "2022-03-03T12:32:34.692Z",
        "__v": 0,
        "id": "6220b562b904c45efe0f9dcb"
    },
   */

function UserForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const fetchDataList = useOutletContext()

  const schema = yup.object().shape({
    name: yup.string().required('This field is required')
  })

  const userForm = useForm({
    shouldUnregister: false,
    resolver: yupResolver(schema)
    // defaultValues: { name: '' }
  })

  const isCreating = useMemo(() => {
    return _.isNil(id)
  }, [id])

  const onCreate = async (formData) => {
    dispatch(setLoading(true))
    try {
      await userApi.add(formData)
      dispatch(setSuccessMessage('Create a new category successfully'))
      userForm.reset()
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
      const { data } = await userApi.update(id, formData)
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
        const { data } = await userApi.get(categoryId)
        userForm.setValue('name', data.name)
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
      onClick: userForm.handleSubmit(isCreating ? onCreate : onUpdate)
    }
  ]

  return (
    <Dialog title={id ? 'Update User' : 'Create User'} buttons={buttons} onClose={handleClose}>
      <FormProvider {...userForm}>
        <Grid container className="w-[60vw]">
          <Grid col={4}>
            <TextField
              label="User Name"
              type="string"
              name="username"
              placeholder="Text here..."
              required
              autoComplete="off"
              autoFocus
            />
          </Grid>
          <Grid col={4}>
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
              placeholder="Text here..."
              required
              autoFocus
            />
          </Grid>
          <Grid col={4}>
            <TextField
              label="Email"
              type="string"
              name="email"
              placeholder="Text here..."
              required
              autoFocus
            />
          </Grid>
          <Grid col={12}>
            <MultipleTextField
              label="Biography"
              type="string"
              name="bio"
              placeholder="Text here..."
              required
              autoFocus
              rows={5}
            />
          </Grid>
        </Grid>
      </FormProvider>
    </Dialog>
  )
}

export default UserForm
