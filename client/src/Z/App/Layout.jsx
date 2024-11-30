// creating this file for the sake of making a page that maintains a header and footer (persistence) but changes components on the page based on the user interaction

import { Outlet } from "react-router-dom"
import Header from "../../components/Header/index"
// I need to make a footer
import Footer from "../../components/Footer"
import './layout.css'

const Layout = () => {
  return (
    <div className="viewport">
      <div className='style1'>
        <Header></Header>
      </div>
      <main className="style2 home">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  )
}


export default Layout