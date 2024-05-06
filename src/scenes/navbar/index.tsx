import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "react-anchor-link-smooth-scroll";

type Props = {}

const Navbar = (props: Props) => {

    const flexBetween = "flex items-center justify-between";

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* LEFT SIDE */}
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={Logo} />
                </div>

                {/* RIGHT SIDE */}
                <div className={`${flexBetween} w-full`}>
                    
                    <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/> 
                            <Link 
                                page="Benifits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/> 
                            <Link 
                                page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/> 
                            <Link 
                                page="Contact Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/> 
                    </div>

                    <div className={`${flexBetween} gap-8`}>   
                            <Link> Sign In</p>
                            <Link> Become a member</p>
                    </div>
                
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar