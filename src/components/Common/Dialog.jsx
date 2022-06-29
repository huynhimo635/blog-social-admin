import { useNavigate } from 'react-router-dom'

import Card from './Card'
import Button from './Button'
import CloseIcon from '../App/Icons/CloseIcon'

function Dialog({ children, onClose, title, buttons }) {
  const navigate = useNavigate()

  const handleClose = () => {
    if (onClose) {
      return onClose()
    }
    return navigate(-1) // go back to previous url
  }

  return (
    <div className="w-screen h-screen bg-third_bg bg-opacity-80 absolute inset-0">
      <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg px-0 py-0">
        <header className="flex justify-between items-center px-4 py-2">
          <h1 className="text-xl uppercase">{title && title}</h1>
          <button
            className="absolute top-2 right-2 cursor-pointer"
            type="button"
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
        </header>
        <div className="mx-2 my-4 px-4">{children}</div>
        {buttons && (
          <div className="flex justify-end items-center bg-slate-50 px-4 py-2">
            <hr className="my-2" />
            {buttons.map((button, key) => (
              // children, type, startIcon, endIcon, color, textColor, onClick
              // eslint-disable-next-line react/no-array-index-key
              <div key={key} className="ml-1 ">
                <Button {...button} />
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}

export default Dialog
