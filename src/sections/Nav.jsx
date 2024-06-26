import React from "react";
import { headerLogo } from "../../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../../assets/icons";

function Nav() {
    return (
        <div>
            <header className="padding-x py-8 absolute z-10 w-full">
                <nav className="flex justify-between items-center max-container">
                    <a href="">
                        <img
                            src={headerLogo}
                            alt="Logo"
                            width={130}
                            height={29}
                        />
                    </a>
                    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    className="font-montserrat leading-normal text-lg text-slate-gray"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden">
                        <img src={hamburger} width={25} height={25} alt="hamburger menu" />
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Nav;
