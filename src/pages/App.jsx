import ConfirmContextProvider from '../context/Confirm/Provider'

import Router from '../router/Router'
import Loading from '../components/Common/Loading'
import Popup from '../components/Common/Popup'
import ConfirmDialog from '../components/App/ConfirmDialog'

function App() {
  return (
    <>
      <Loading />
      <Popup />

      <ConfirmContextProvider>
        <Router />
        <ConfirmDialog />
      </ConfirmContextProvider>
    </>
  )
}

export default App
