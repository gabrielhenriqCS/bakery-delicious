import { Outlet } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './NavBar';


export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main role='main' className="flex-grow container mx-auto px-4 py-2 max-w-screen-lg">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}