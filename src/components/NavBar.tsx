



function Navbar () {
  return (
    <nav className="flex flex-row py-4">
      <div className="mx-auto flex items-center">
        <a href="/" className="text-[35px] font-bold no-underline">
          Padaria Delicias
        </a>
      </div>
      <div className="flex items-center">
          <a href="/" className="no-underline">
            Home
          </a>
          <a href="/menu" className="ml-4 no-underline">
            Menu
          </a>
          <a href="/orders" className="ml-4 no-underline">
            Orders
          </a>
      </div>
      </nav>
  );
};

export default Navbar;