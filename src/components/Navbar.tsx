import Logo from "../assets/logo.png";
import LogoutDialog from "./dialog/Logout-dialog";
import NavbarDialog from "./dialog/Navbar-dialog";

const links = [
  "Account",
  "Logout",
  "Create Guide",
  "Login",
  "Sign up",
] as const;

export type LinksUnion = Exclude<(typeof links)[number], "Logout">;

const Navbar = () => {
  return (
    <nav className="bg-main-accent w-full h-20">
      <div className="w-full mx-auto flex items-center justify-stretch h-full max-w-7xl">
        <div className="flex flex-1 h-full items-center">
          <a
            href="#"
            className="h-full py-2 overflow-hidden inline-block px-5 outline-none focus-visible:bg-white/20"
          >
            <img src={Logo} className="object-cover h-full" />
          </a>
        </div>
        <ul
          id="nav-mobile"
          className="flex items-stretch pr-10 text-white font-medium text-xl h-full"
        >
          {links.map((link) => {
            if (link == "Logout") {
              return (
                <LogoutDialog key={link}>
                  <li className="flex">
                    <a
                      href="#"
                      className="px-3 flex items-center h-full bg-transparent transition-colors hover:bg-white/20 focus-visible:bg-white/20 cursor-pointer outline-none"
                    >
                      {link}
                    </a>
                  </li>
                </LogoutDialog>
              );
            } else {
              return (
                <NavbarDialog title={link} key={link}>
                  <li className="flex">
                    <a
                      href="#"
                      className="px-3 flex items-center h-full bg-transparent transition-colors hover:bg-white/20 focus-visible:bg-white/20 cursor-pointer outline-none"
                    >
                      {link}
                    </a>
                  </li>
                </NavbarDialog>
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
