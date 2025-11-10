"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import DemoModal from "./DemoModal";

const nav = [
  { name: "Benefits", id: "benefits" },
  { name: "Features", id: "feature" },
  { name: "Contact", id: "contact" },
];
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // funciton to open and close nav for mobile view
  function handleTogleNav() {
    setNavOpen((prev) => !prev);
  }

  // function to open modal for demo
  function handleToggleModal() {
    setOpenModal((prev) => !prev);
  }
  return (
    <header className="bg-indigo-950 flex justify-between items-center px-4 lg:px-16 py-6 relative ">
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
      <nav className="md:flex text-white items-center gap-6 hidden ">
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="hover:border-b-2 hover:border-white border-b-2 border-indigo-950 transition-border duration-300  "
          >
            {item.name}
          </a>
        ))}

        <button
          className="bg-white text-indigo-600 px-4 py-2 rounded-sm hover:bg-indigo-950 border border-white hover:text-white cursor-pointer transition-bg duration-300"
          onClick={handleToggleModal}
        >
          Book a Demo
        </button>
      </nav>
      {navOpen && (
        <MobileNav
          onToggleNav={handleTogleNav}
          onToggleModal={handleToggleModal}
        />
      )}
      {openModal && <DemoModal onToggleModal={handleToggleModal} />}
    </header>
  );
}
type MobilenavProps = {
  onToggleNav: () => void;
  onToggleModal: () => void;
};
function MobileNav({ onToggleNav, onToggleModal }: MobilenavProps) {
  return (
    <nav className=" absolute text-indigo-950 flex flex-col items-center gap-4 bg-white w-full left-0 top-20 pt-12 ">
      {nav.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="hover:border-b-2 border-white border-b-2 hover:border-indigo-950 transition-border duration-300 font-bold "
          onClick={onToggleNav}
        >
          {item.name}
        </a>
      ))}
      <button
        className="bg-white text-indigo-600 px-4 py-2 rounded-sm hover:bg-indigo-950 border border-white hover:text-white cursor-pointer transition-bg duration-300"
        onClick={() => {
          onToggleNav();
          onToggleModal();
        }}
      >
        Book a Demo
      </button>
    </nav>
  );
}

export default Header;
