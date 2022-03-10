import { If, Then, Else } from 'react-if'

import Router from '../router/Router'
import Layout from '../components/Common/Layout'
import Loading from '../components/Common/Loading'
import Popup from '../components/Common/Popup'

function App() {
  const isLoggedIn =
    Boolean(localStorage.getItem('token')) && localStorage.getItem('token') !== 'undefined'
  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Layout>
            <Router />
          </Layout>
        </Then>
        <Else>
          <Router />
        </Else>
      </If>

      <Loading />
      <Popup />
    </>
  )
}

export default App
