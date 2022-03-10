import SideBar from './SideBar'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  const { children } = props
  return (
    <>
      <Header />
      <SideBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
