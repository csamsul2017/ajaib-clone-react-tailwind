import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import CompanyLegality from './components/CompanyLegality';

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div className=" relative">
      <Navbar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <Hero />
      <CompanyLegality />
    </div>
  );
}

export default App;
