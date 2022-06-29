import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { UilAlignCenterAlt } from '@iconscout/react-unicons'

import ConfirmDialog from '../components/App/ConfirmDialog'
import TextField from '../components/Form/TextField'
import MultipleTextField from '../components/Form/MultipleTextField'
import DropdownField from '../components/Form/DropdownField'
import FileField from '../components/Form/FileField'
import Button from '../components/Common/Button'
import DataTable from '../components/Common/DataTable'
import Card from '../components/Common/Card'

function DashBoard() {
  const schema = yup.object().shape({
    category: yup.string().required(),
    product: yup.number().required(),
    description: yup.string().max(255),
    dropdown: yup.string().required()
  })
  const testForm = useForm({
    shouldUnregister: false,
    resolver: yupResolver(schema),
    defaultValues: {
      category: 'asdasd'
    }
  })

  const onSubmit = (data) => {
    console.log('data :>> ', data)
  }

  const rows = [
    {
      id: 1,
      name: 'tets',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 2,
      name: 'tets',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 3,
      name: 'tets',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 4,
      name: 'tets',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 5,
      name: 'tets',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 6,
      name: 'tets',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 7,
      name: 'tets',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 8,
      name: 'tets',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 9,
      name: 'tets',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 10,
      name: 'tets',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 11,
      name: 'tets',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 12,
      name: 'tets',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    },
    {
      id: 13,
      name: 'tets',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate illo voluptatum iure alias non deserunt fuga, esse adipisci consectetur praesentium tenetur id iusto rerum vero error eveniet velit inventore.',
      qty: 15
    }
  ]

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
      name: 'description',
      description: 'Description'
    },
    {
      name: 'qty',
      description: 'Quantity',
      align: 'text-center'
    }
  ]

  return (
    <Card>
      <FormProvider {...testForm}>
        <TextField label="Category" name="category" placeholder="Text here..." required disabled />
        <TextField
          label="Product"
          type="number"
          name="product"
          placeholder="Text here..."
          required
        />
        <MultipleTextField label="Description" name="description" placeholder="Text here..." />
        <DropdownField
          label="Dropdown"
          name="dropdown"
          options={[
            { label: '123', value: '123' },
            { label: '234', value: '234' },
            { label: 'placeholder', value: '' }
          ]}
          defaultValue=""
        />
        <br />
        <FileField />
        <br />
        <Button
          type="submit"
          startIcon={<UilAlignCenterAlt />}
          onClick={testForm.handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </FormProvider>
      <DataTable
        module="Test"
        rows={rows}
        columns={columns}
        test="test"
        search={{ placeholder: 'Text here...' }}
      />
      {/* <ConfirmDialog /> */}
    </Card>
  )
}

export default DashBoard
