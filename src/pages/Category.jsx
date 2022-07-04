import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import produce from 'immer'

import Card from '../components/Common/Card'
import DataTable from '../components/Common/DataTable'

import categoryApi from '../api/category'
import { setErrorMessage, setPopup, setSuccessMessage } from '../store/popupSlice'
import { setLoading } from '../store/loadingSlice'
import useConfirm from '../hooks/useConfirm'

import { ENTITY } from '../utils/constant'

function Category() {
  const dispatch = useDispatch()
  const [dataForList, setDataForList] = useState(null)
  const { isConfirmed } = useConfirm()

  const fetchDataList = async () => {
    dispatch(setLoading(true))
    try {
      const { data } = await categoryApi.getAll()
      const formatData = data.map((item) =>
        produce(item, (draft) => {
          draft.createdAt = new Date(item.createdAt).toLocaleString()
          draft.updatedAt = new Date(item.updatedAt).toLocaleString()
        })
      )
      setDataForList(formatData)
    } catch (error) {
      dispatch(setPopup({ open: true, ...error?.response }))
    } finally {
      dispatch(setLoading(false))
    }
  }

  const onDelete = async (id) => {
    try {
      const result = await isConfirmed(
        'Are you sure?',
        'You will not be able to recover this imaginary file!'
      )
      if (!result) return
      dispatch(setLoading(true))
      const { data } = await categoryApi.delete(id)
      dispatch(setSuccessMessage(data.message))
      fetchDataList()
    } catch (error) {
      const { response } = error
      dispatch(setErrorMessage(response.message))
    }
    dispatch(setLoading(false))
  }

  useEffect(() => {
    fetchDataList()
  }, [])

  const columns = [
    {
      name: 'name',
      description: 'Name'
    },
    {
      name: 'createdAt',
      description: 'Created at'
    },
    {
      name: 'updatedAt',
      description: 'Updated at'
    }
  ]

  return (
    <Card className="h-full">
      <DataTable
        module={ENTITY.category}
        rows={dataForList}
        columns={columns}
        search={{ placeholder: 'Text here...' }}
        handleDelete={(id) => onDelete(id)}
      />
      <Outlet context={fetchDataList} />
    </Card>
  )
}

export default Category
