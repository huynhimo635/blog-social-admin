import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'

import { UilExclamationTriangle, UilCheckCircle } from '@iconscout/react-unicons'

import { resetPopup } from '../../store/popupSlice'

function Popup() {
  const dispatch = useDispatch()
  const popupState = useSelector((state) => state.popup.value)

  useEffect(() => {
    if (popupState.open) {
      setTimeout(() => {
        dispatch(resetPopup())
      }, 2000)
    }
  }, [popupState])

  return (
    <div
      className={clsx(
        'absolute right-7 top-7 flex flex-row gap-2',
        popupState.success ? 'bg-green-600' : 'bg-red-600',
        'text-white font-semibold text-xl py-3 px-6 rounded-xl',
        popupState.open
          ? 'translate-x-0 transition-all duration-[5000]'
          : 'translate-x-[200%] transition-all duration-[5000]'
      )}
    >
      {popupState.success ? <UilCheckCircle /> : <UilExclamationTriangle />}
      <span className="tracking-wider">{popupState.message}</span>
    </div>
  )
}

export default Popup
