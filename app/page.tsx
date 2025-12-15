'use client'

import Navbar from "@/components/Navbar";
import { Book, Settings, User2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);



  return (
    <div className="flex  relative h-screen items-centerbg-zinc-50 font-sans dark:bg-black">


      {
        isLoggedIn ? <nav className="w-[75px] h-full items-center border border-gray-300 flex flex-col p-3
        ">

          <div className="size-12 rounded-[500px] flex justify-center items-center
           mb-10 border-black bg-black cursor-pointer">
            <User2Icon className="size-8 text-white" />
          </div>


          <div className="w-full flex flex-col items-center ">
            <ul className="flex flex-col gap-5">
              <li className="cursor-pointer hover:text-green-500"><Book className="size-8" /></li>
              <li className="cursor-pointer hover:text-green-500"><Settings className="size-8" /></li>
            </ul>


          </div>


        </nav>
          : null
      }



      <div className="w-full   h-full">
        <Navbar />






        <main className="w-full h-[calc(100%-72px)] flex 
      flex-col items-center justify-center">


          <div className="w-[450px] h-15 border">

          </div>

        </main>
      </div>




    </div>
  );
}
