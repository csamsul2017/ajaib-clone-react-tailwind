import logo from '../assets/logo.png';

const Navbar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className="flex justify-between mb-4">
      <img className="w-28 relative z-10" src={logo} alt="Ajaib Logo" />
      <div className="flex items-center relative z-10">
        <span
          className="material-symbols-rounded"
          onClick={() => {
            setIsOpenSidebar(!isOpenSidebar);
          }}
        >
          {isOpenSidebar ? 'close' : 'menu'}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
