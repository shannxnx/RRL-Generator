'use client'

import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import { Book, Settings, User2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {


  const [isLoggedIn, setIsLoggedIn] = useState(true);



  return (
    <div className="flex  relative h-screen items-centerbg-zinc-50 font-sans dark:bg-black">


      {
        isLoggedIn ? <SideNav />
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
