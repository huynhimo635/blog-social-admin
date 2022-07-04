import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import produce from 'immer'

import Card from '../components/Common/Card'
import DataTable from '../components/Common/DataTable'

import { setPopup } from '../store/popupSlice'
import { setLoading } from '../store/loadingSlice'
import userApi from '../api/user'
import useConfirm from '../hooks/useConfirm'

import { ENTITY } from '../utils/constant'

function User() {
  const dispatch = useDispatch()
  const [dataForList, setDataForList] = useState(null)
  const { isConfirmed } = useConfirm()

  const fetchDataList = async () => {
    dispatch(setLoading(true))
    try {
      const { data } = await userApi.getAll()
      const formatData = data.map((item) =>
        produce(item, (draft) => {
          draft.followings = item.followings.length
          draft.followers = item.followers.length
          draft.isAdmin = item.isAdmin ? 'Yes' : 'No'
        })
      )
      setDataForList(formatData)
    } catch (error) {
      dispatch(setPopup({ open: true, ...error?.response }))
    }
    dispatch(setLoading(false))
  }

  const onDelete = async (id) => {
    try {
      const result = await isConfirmed(
        'Are you sure?',
        'You will not be able to recover this imaginary file!'
      )
      if (!result) return
      dispatch(setLoading(true))
      const { data } = await userApi.delete(id)
      dispatch(setPopup({ open: true, ...data }))
      fetchDataList()
    } catch (error) {
      const { response } = error
      dispatch(setPopup({ open: true, ...response }))
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    fetchDataList()
  }, [])

  const columns = [
    {
      name: 'username',
      description: 'User Name'
    },
    {
      name: 'email',
      description: 'Email'
    },
    {
      name: 'bio',
      description: 'biography'
    },
    {
      name: 'isAdmin',
      description: 'Admin'
    },
    {
      name: 'followers',
      description: 'followers',
      align: 'right'
    },
    {
      name: 'followings',
      description: 'followings',
      align: 'right'
    }
  ]

  return (
    <Card className="h-full">
      <DataTable
        module={ENTITY.user}
        rows={dataForList}
        columns={columns}
        search={{ placeholder: 'Text here...' }}
        handleDelete={onDelete}
      />
      <Outlet context={fetchDataList} />
    </Card>
  )
}

export default User
