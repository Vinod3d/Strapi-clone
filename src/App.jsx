
import './App.css'
import { useGlobalContext } from './Context'
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

function App() {
 const {isSidebarOpen} = useGlobalContext();

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Sidebar/>
      <Submenu/>
    </main>
  )
};

export default App
