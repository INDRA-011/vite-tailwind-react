const Header = () => {
  return (
    <nav className="fixed top-0 z-20 h-16 w-full border-b bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-semibold">
          Logo
        </a>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a className="hover:text-slate-600">Home</a>
          </li>
          <li>
            <a className="hover:text-slate-600">Features</a>
          </li>
          <li>
            <a className="hover:text-slate-600">Pricing</a>
          </li>
          <li>
            <a className="hover:text-slate-600">Docs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
