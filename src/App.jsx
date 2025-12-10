import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div className="px-6 py-3 relative">
      <Navbar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <Hero />
    </div>
  );
}

export default App;
