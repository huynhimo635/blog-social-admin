import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'

import _ from 'lodash'

function TextField(props) {
  const { label, type, placeholder, name, required, autoFocus, disabled, rows } = props

  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className="form-control">
      <label htmlFor={name} className={clsx('text-gray-700', disabled && 'text-gray-400')}>
        {label}
        {required && <span className="pl-1 italic text-red-600">*</span>}
      </label>
      <textarea
        className={clsx(
          'form-input rounded-lg border-transparent flex-1 appearance-none w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent disabled:text-gray-400 disabled:bg-gray-100',
          _.get(errors, name)
            ? 'border-2 border-red-500 focus:ring-red-500'
            : 'border border-gray-300 focus:ring-purple-600'
        )}
        type={type}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        disabled={disabled}
        rows={rows}
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
  required: false,
  autoFocus: false,
  disabled: false,
  rows: '5'
}

export default TextField
