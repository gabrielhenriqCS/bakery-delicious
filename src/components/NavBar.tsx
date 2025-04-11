import { Link } from "react-router-dom";
import logoBakery from "../assets/logobakery.png";
import bagIcon from "../assets/bagicon.png";
import { useEffect, useState } from "react";

export default function Navbar() {
const [bag, setBag] = useState("");

useEffect(() => {
  let prevScrollpos = window.pageYOffset;
  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByTagName("nav")[0].style.top = "0";
    } else {
      const navbar = document.getElementsByTagName("nav")[0];
      if (navbar) {
        navbar.style.top = "-50px";
      }
    }
    prevScrollpos = currentScrollPos;
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav className="fixed top-0 flex w-full items-center bg-amber-200 p-2 shadow-md transition-[0.3s]">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoBakery}
            alt="logo Padaria Delicia"
            className="mr-2 h-10 w-10 object-contain md:h-16 md:w-16"
          />
        </Link>
      <div className="flex w-full justify-center font-bold">
        <div className="flex justify-between gap-6">
          <Link
            to="/"
            className="text-lg text-gray-700 no-underline transition hover:text-yellow-600"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-lg text-gray-700 no-underline transition hover:text-yellow-600"
          >
            Menu
          </Link>
          <Link
            to="/orders"
            className="text-lg text-gray-700 no-underline transition hover:text-yellow-600"
          >
            Orders
          </Link>
        </div>
      </div>

      <div>
        <img
          onClick={() => {
            setBag((prev) => prev + 1);
          }}
          src={bagIcon}
          alt="Sacola de Compras"
          className="h-10 w-10 cursor-pointer object-contain md:h-10 md:w-10"
        />
        {bag.length === 0 ? (
          ""
        ) : (
          <span className="absolute top-2 right-2 rounded-full bg-red-500 px-2 text-xs font-bold text-white">
            {bag.length}
          </span>
        )}
      </div>
    </nav>
  );
}
