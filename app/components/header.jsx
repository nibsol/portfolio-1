import React from "react";
import Link from "next/link";
import { Diamond } from "../assets/svgs/icons/diamond";

const Header = () => {
    return (
        <div className="px-8 py-6 h-full font-medium text-xl">
            <div className="flex justify-between items-center">
                <Link href="/" passHref>
                    <span className="cursor-pointer">T~S</span>
                </Link>
                <div className="flex items-center gap-7">
                    <Link href="/my-work" passHref>
                        <span className="cursor-pointer">My Work</span>
                    </Link>
                    <Diamond />
                    <Link href="/contact" passHref>
                        <span className="cursor-pointer">Contact Me!</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
