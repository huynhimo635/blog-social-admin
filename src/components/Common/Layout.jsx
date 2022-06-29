import SideBar from '../App/SideBar'
import Header from '../App/Header'
import Footer from '../App/Footer'

function Layout({ children }) {
  return (
    <div className="w-screen h-screen flex flex-1 overflow-hidden">
      <SideBar />
      <div className="w-[calc(100vw - 260px)] flex-1 overflow-auto bg-third_bg px-10 pb-5 pt-2 flex flex-col justify-between ">
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
