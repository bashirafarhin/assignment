import Logo from "../ui/Logo";
import ThemeToggleButton from "../ui/ThemeToggleButton";
import Link from "next/link";
import MenuDropdown from "../MenuDropdown";
import Login from "../Login";

const Header = () => {
  return (
    <header>
      <nav className="py-2.5">
        <div className="flex justify-between w-full sm:w-[80vw] mx-auto items-center">
          <Logo />
          <div className="flex items-center gap-3 lg:order-2">
            <Login />
            <ThemeToggleButton />

            {/* <Menu /> */}
            <div className="block lg:hidden">
              <MenuDropdown />
            </div>
          </div>

          {/* navbar */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/news"
                  className="block py-2 pr-4 pl-3 lg:p-0 dark:text-text"
                  aria-current="page"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/music"
                  className="block py-2 pr-4 pl-3 lg:p-0 dark:text-text"
                  aria-current="page"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="/favourites"
                  className="block py-2 pr-4 pl-3 lg:p-0 dark:text-text"
                  aria-current="page"
                >
                  Favourites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
