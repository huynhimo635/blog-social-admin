import { useFormContext } from 'react-hook-form'

import clsx from 'clsx'
import _ from 'lodash'

function DropdownField(props) {
  const { label, options, disabled, required, defaultValue, name } = props
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <div className="form-control">
      <div className="flex flex-col">
        <label htmlFor={name} className={clsx('text-gray-700', disabled && 'text-gray-400')}>
          {label}
          {required && <span className="pl-1 italic text-red-600">*</span>}
        </label>
        <select
          className={clsx(
            'form-select rounded-lg border-transparent flex-1 appearance-none w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent disabled:text-gray-400 disabled:bg-gray-100',
            _.get(errors, name)
              ? 'border-2 border-red-500 focus:ring-red-500'
              : 'border border-gray-300 focus:ring-main_color'
          )}
          name={name}
          defaultValue={defaultValue}
          disabled={disabled}
          {...register(name)}
        >
          {_.isArray(options) &&
            options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
        </select>
        {_.get(errors, name) && (
          <span className="font-normal italic text-red-600">{_.get(errors, name).message}</span>
        )}
      </div>
    </div>
  )
}

DropdownField.defaultProps = {
  disabled: false,
  required: false
}

export default DropdownField
