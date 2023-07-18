import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "Flex items-center justify-center";

  return (
    <nav>
      <div className=""
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              
              <img alt="logo" src={Logo} />

              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <p>Home</p>
                  <p>Benefits</p>
                  <p>Our classes</p>
                  <p>Contact Us</p>
                </div>
                <div>
                  <p>Sign Up</p>
                  <button>Become A Member</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar; 