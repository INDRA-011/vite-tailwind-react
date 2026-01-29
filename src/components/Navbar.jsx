const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 backdrop-blur flex items-center justify-between">
      <a href="#">
        <img
          src="../../public/assets/logo-dark.svg"
          alt="Logo"
          className="h-9 w-auto"
        />
      </a>

      <div className="hidden md:flex items-center gap-8 lg:gap-12 lg:pl-20">
        <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300">
          Home
        </a>
        <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300">
          Features
        </a>
        <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300">
          Pricing
        </a>
        <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300">
          Docs
        </a>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="hidden md:block px-4 py-2 border border-purple-600 rounded-md hover:bg-slate-100">
          Sign in
        </button>
        <button className="hidden md:block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
