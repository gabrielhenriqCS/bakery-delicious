import { Outlet } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './NavBar';


export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main role='main' className="flex-grow container mx-auto px-4 py-8">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}