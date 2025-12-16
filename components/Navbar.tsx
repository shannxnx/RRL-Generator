'use client';
import { EllipsisVertical, User2Icon } from "lucide-react";
import { useState } from "react"




export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);



    return <nav className="w-full h-18 border bg-black flex justify-between items-center">




        <div className="w-[100px]  h-full justify-center flex items-center border-white">
            <div className="size-12 rounded-tl-2xl flex justify-center items-center
          bg-green-400 ">
                <h1 className="text-2xl">R</h1>
            </div>
        </div>


        <ul className="flex  gap-10 mr-10 ">
            <li className="lg:hidden md:hidden block"><EllipsisVertical className="text-white cursor-pointer" /></li>
            <li className="text-white lg:text-[20px] cursor-pointer hover:text-green-400 lg:block
            hidden md:block">Pricing</li>
            {/*<li className="text-white lg:text-[20px] cursor-pointer hover:text-gray-400">About</li>}*/}
            <li className="text-white lg:text-[20px] cursor-pointer hover:text-green-400
            lg:block
            hidden md:block">Contacts</li>

            {
                isLoggedIn ? <li className="text-red-500 lg:text-[20px] cursor-pointer lg:block
            hidden md:block">Logout</li>
                    : <li className="text-white lg:text-2xl cursor-pointer hover:text-green-400
                    lg:block
            hidden md:block">
                        <a href="sign-up">Sign-up</a>

                    </li>
            }

        </ul>
    </nav>
}