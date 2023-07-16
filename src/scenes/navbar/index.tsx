import { useState } from "react"
import { Bars3Icon, LinkIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";

 type Props = {
  selectedPage: selectedPage;
  setSelectedPage: (value: SelectedPage) => void;
 };

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexbetween = "flex items-center justify-between";

  return (
    <nav>
        <div className={`${flexbetween} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexbetween} mx-auto w-5/6`}>
            <div className={`${flexbetween} w-full gap-16`}>

              <img alt="logo" src={Logo} />

              <div className={`${flexbetween} w-full`}>
                <div className={`${flexbetween} gap-8 text-sm`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                  />
                   <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                  />
                   <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <p>Sign In</p>
                  <button>Join Us Today</button>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
      </div> 
    </nav>
  )
}

export default Navbar;
