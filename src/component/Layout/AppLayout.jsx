import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <hr className="dark:text-gray-300" />
      <Footer />
    </div>
  )
}

export default AppLayout
