import SideBar from './SideBar'
import Header from './Header'
import Footer from './Footer'

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
