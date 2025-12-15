'use client';
import { User2Icon } from "lucide-react";
import { useState } from "react"




export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);



    return <nav className="w-full h-18 border bg-black flex justify-between items-center">



        {
            //isLoggedIn ? <User2Icon className="text-green-400 text-2xl ml-10  border-white  border w-12 h-12 
            //rounded-[900] cursor-pointer" />
            //    : <h1 className="text-2xl text-black ml-10 border rounded-[900] w-[54px] h-[54px]
            //flex items-center justify-center bg-white cursor-pointer">RRL</h1>


        }

        <div className="w-[100px]  h-full justify-center flex items-center border-white">
            <div className="size-12 rounded-tl-2xl flex justify-center items-center
          bg-green-400 ">
                <h1 className="text-2xl">R</h1>
            </div>
        </div>


        <ul className="flex gap-10 mr-10">
            <li className="text-white lg:text-[20px] cursor-pointer hover:text-gray-400">Pricing</li>
            <li className="text-white lg:text-[20px] cursor-pointer hover:text-gray-400">About</li>
            <li className="text-white lg:text-[20px] cursor-pointer hover:text-gray-400">Contacts</li>

            {
                isLoggedIn ? <li className="text-red-500 lg:text-[20px] cursor-pointer ">Logout</li>
                    : <li className="text-white lg:text-2xl cursor-pointer hover:text-green-400">
                        <a href="sign-up">Sign-up</a>

                    </li>
            }

        </ul>
    </nav>
}