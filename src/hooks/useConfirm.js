import { useContext } from 'react'
import { ConfirmContext } from '../context/Confirm/Provider'

function useConfirm() {
  const [confirm, setConfirm] = useContext(ConfirmContext)

  const isConfirmed = (title, message) => {
    const promise = new Promise((resolve, reject) => {
      setConfirm({
        title,
        message,
        isOpen: true,
        proceed: resolve,
        cancel: reject
      })
    })

    return promise.then(
      () => {
        setConfirm({
          title: '',
          message: '',
          isOpen: false,
          proceed: null,
          cancel: null
        })
        return true
      },
      () => {
        setConfirm({
          title: '',
          message: '',
          isOpen: false,
          proceed: null,
          cancel: null
        })
        return false
      }
    )
  }

  return {
    ...confirm,
    isConfirmed
  }
}

export default useConfirm
