import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {

    // Render navigation items
    const renderNavItems = () =>
        navLists.map((nav) => (
            <li
                key={nav}
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" >
                {nav}
            </li>
        ));

    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width items-center">
                {/* Logo */}
                <img src={appleImg} alt="Apple Logo" width={14} height={18} />

                {/* Navigation List */}
                <ul className="flex flex-1 justify-center max-sm:hidden">
                    {renderNavItems()}
                </ul>

                {/* Utility Icons */}
                <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="Search Icon" width={18} height={18} />
                    <img src={bagImg} alt="Bag Icon" width={18} height={18} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
