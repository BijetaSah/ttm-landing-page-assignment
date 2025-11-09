"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const nav = [
  { name: "Benefits", id: "benefits" },
  { name: "Features", id: "feature" },
  { name: "Contact", id: "contact" },
];
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  function handleTogleNav() {
    setNavOpen((prev) => !prev);
  }
  return (
    <header className="bg-indigo-950 flex justify-between items-center px-8 lg:px-16 py-6 relative ">
      {/* logo/name of the company */}
      <h1 className="text-white font-semibold text-xl sm:text-2xl ">
        TTM Konnect
      </h1>

      {/* navbar menu button */}
      <button
        className="text-3xl text-white md:hidden cursor-pointer"
        onClick={handleTogleNav}
      >
        {!navOpen ? <IoMenu /> : <IoClose />}
      </button>

      {/*navbar  */}
      <nav className="md:flex text-white items-center gap-4 hidden ">
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="hover:border-b hover:border-white border-b border-indigo-950 transition-border duration-300  "
          >
            {item.name}
          </a>
        ))}

        <span className="bg-white text-indigo-600 px-4 py-2 rounded-sm hover:bg-indigo-950 border border-white hover:text-white cursor-pointer transition-bg duration-300">
          Book a Demo
        </span>
      </nav>
      {navOpen && <MobileNav onClick={handleTogleNav} />}
    </header>
  );
}
type MobilenavProps = {
  onClick: () => void;
};
function MobileNav({ onClick }: MobilenavProps) {
  return (
    <nav className=" absolute text-indigo-950 flex flex-col items-center gap-4 bg-white w-full left-0 top-20 pt-12 ">
      {nav.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="hover:border-b-2 border-white border-b-2 hover:border-indigo-950 transition-border duration-300 font-bold "
          onClick={onClick}
        >
          {item.name}
        </a>
      ))}
      <span className="bg-white text-indigo-600 px-4 py-2 rounded-sm hover:bg-indigo-950 border border-white hover:text-white cursor-pointer transition-bg duration-300">
        Book a Demo
      </span>
    </nav>
  );
}

export default Header;
