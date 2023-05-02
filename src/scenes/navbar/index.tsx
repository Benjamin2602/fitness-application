import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: string) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-pul py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            {/* left side  */}
        <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="Logo"/>

            {/* right side  */}
            <div className={`${flexBetween} w-full`}>

{/* inner left side like home   */}
                <div className={`${flexBetween} gap-8 text-sm`}>  
                <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                <Link 
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />

                <Link 
                    page="Our classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />

                <Link 
                    page="Contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />

                </div>

                {/* inner right side like sign in and become an member */}

                <div className={`${flexBetween} gap-8 `}>
                    <p>Sign in</p>
                    <button>Become a member</button>

                </div>

            </div>
            

            </div>
            

        </div>
        
    </div>
  </nav>;
};

export default Navbar;
