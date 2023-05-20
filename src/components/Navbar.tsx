import Logo from "../assets/logo.png";

const Navbar = () => {
  const links: string[] = [
    "Account",
    "Logout",
    "Create Guide",
    "Login",
    "Sign up",
  ];

  return (
    <nav className="bg-main-primary w-full h-20">
      <div className="w-full mx-auto flex items-center justify-stretch h-full max-w-7xl">
        <div className="flex flex-1 h-full items-center">
          <a href="#" className="h-full py-2 overflow-hidden inline-block px-5">
            <img src={Logo} className="object-cover h-full" />
          </a>
        </div>
        <ul
          id="nav-mobile"
          className="flex items-stretch pr-10 text-white font-medium text-xl h-full"
        >
          {links.map((link) => (
            <li
              key={link}
              className="px-3 flex items-center bg-transparent transition-colors hover:bg-white/20 cursor-pointer"
            >
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
