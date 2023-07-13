import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

 type Props = {};

const Navbar = (props: Props) => {
  const flexbetween = "flex items-center justify-between";
  return (
    <nav>
        <div className={`${flexbetween} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexbetween} mx-auto w-5/6`}>
            <div className={`${flexbetween} w-full gap-16`}>
              <img alt="logo" src={Logo} />
            </div>
          </div>
      </div> 
    </nav>
  )
}

export default Navbar;
