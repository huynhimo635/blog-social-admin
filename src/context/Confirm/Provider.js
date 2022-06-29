import * as React from 'react'

export const ConfirmContext = React.createContext()

function ConfirmContextProvider({ children }) {
  const [confirm, setConfirm] = React.useState({
    title: '',
    message: '',
    isOpen: false,
    proceed: null,
    cancel: null
  })

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <ConfirmContext.Provider value={[confirm, setConfirm]}>{children}</ConfirmContext.Provider>
}

export default ConfirmContextProvider
