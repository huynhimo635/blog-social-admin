import clsx from 'clsx'

function Button(props) {
  const { children, type, startIcon, endIcon, color, textColor, onClick } = props
  return (
    <button
      type={type}
      className={clsx(
        'py-2 px-4 flex justify-center items-center   w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg',
        `bg-${color} hover:bg-opacity-90 focus:ring-${color} focus:ring-offset-${color} text-${textColor}`
      )}
      onClick={onClick}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  color: 'main_color',
  textColor: 'white'
}

export default Button
