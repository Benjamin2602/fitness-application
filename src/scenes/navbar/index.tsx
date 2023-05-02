import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggles] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-pul py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            {/* left side  */}
        <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="Logo"/>

            {/* right side  */}
            { isAboveMediumScreens ? (
                // this condition represent the screen size when we are in desktop mode
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
                    <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>

                </div>

            </div>) : (
                //  else this represent the screen size when we are in mobile mode
                <button 
                className="rounded-full bg-secondary-500 p-2"
                onClick={()=> setIsMenuToggles(!isMenuToggled)}>
                    <Bars3Icon className="h-6 w-6 text-white"/>
                </button>

            )}
            

            </div>
            

        </div>
        
    </div>
  </nav>;
};

export default Navbar;
