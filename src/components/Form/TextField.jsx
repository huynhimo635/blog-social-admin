import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'

import _ from 'lodash'

function TextField(props) {
  const { label, type, placeholder, name, defaultValue, required, autoFocus } = props

  console.log('autoFocus', autoFocus)
  const {
    register,
    formState: { errors }
  } = useFormContext()

  console.log('errors :>> ', _.get(errors, name))
  return (
    <div className="form-control">
      <label htmlFor={name} className="text-gray-700 mb-10">
        {label}
        {required && <span className="pl-1 italic text-red-600">*</span>}
      </label>
      <input
        className={clsx(
          'rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent',
          _.get(errors, name)
            ? 'border-2 border-red-500 focus:ring-red-500'
            : 'border border-gray-300 focus:ring-purple-600'
        )}
        type={type}
        name={name}
        // control={control}
        placeholder={placeholder}
        defaultValue={defaultValue}
        // autoFocus={autoFocus}
        {...register(name)}
      />
      {_.get(errors, name) && (
        <span className="font-normal italic text-red-600">{_.get(errors, name).message}</span>
      )}
    </div>
  )
}

TextField.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  defaultValue: '',
  required: false,
  autoFocus: false
}

export default TextField
