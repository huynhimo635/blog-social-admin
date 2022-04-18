import SideBar from './SideBar'
import Header from '../App/Header'
import Footer from '../App/Footer'

function Layout({ children }) {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="p-10">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
