import { useState } from 'react';
import logo from '../assets/logo.png';

const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`${isOpenSidebar ? 'translate-x-0' : '-translate-x-full'} w-full h-full fixed left-0 right-0 top-0 bg-white px-6 py-3 space-y-7 transform transition-transform duration-300 ease-in-out z-5`}>
      <ul className="space-y-6 mt-12">
        <li className="flex flex-col gap-4 border-t border-gray-200 ">
          <div className="flex justify-between">
            <a href="#" className="text-violet-800">
              Produk
            </a>
            <span className="material-symbols-rounded" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? 'minimize' : 'add'}
            </span>
          </div>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col px-4 space-y-6 transition-transform duration-300 ease-in-out`}>
            <a href="#">Saham</a>
            <a href="#">Reksa Dana</a>
            <a href="#">Aset Kripto</a>
            <a href="#">Saham AS</a>
            <a href="#">Kripto Futures</a>
            <a href="#">IPO</a>
          </div>
        </li>
        <li>Biaya</li>
        <li>Belajar</li>
        <li>Tentang Kami</li>
        <li>Pusat Bantuan</li>
        <li>
          <button className="border border-blue-600 text-blue-600 p-2 rounded-sm">Download</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
