import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import Card from '../components/Common/Card'
import DataTable from '../components/Common/DataTable'

import categoryApi from '../api/category'
import { setPopup } from '../store/popupSlice'
import { setLoading } from '../store/loadingSlice'

import { ENTITY } from '../utils/constant'

function User() {
  const dispatch = useDispatch()
  const [dataForList, setDataForList] = useState(null)

  const fetchDataList = async () => {
    dispatch(setLoading(true))
    try {
      const { data } = await categoryApi.getAll()
      setDataForList(data)
    } catch (error) {
      dispatch(setPopup({ open: true, ...error?.response }))
    }
    dispatch(setLoading(false))
  }

  useEffect(() => {
    fetchDataList()
  }, [])

  const columns = [
    {
      name: 'id',
      description: 'Id'
    },
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
        module={ENTITY.user}
        rows={dataForList}
        columns={columns}
        search={{ placeholder: 'Text here...' }}
      />
      <Outlet context={fetchDataList} />
    </Card>
  )
}

export default User
