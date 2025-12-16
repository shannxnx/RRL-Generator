'use client'

import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import { Book, Settings, User2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName] = useState('Shann Rhey')


  return (
    <div className="flex relative w-screen h-screen items-center bg-zinc-50 font-sans dark:bg-black">


      {

        isLoggedIn ? <SideNav />
          : null
      }


      {/* Main content container */}
      <div className="w-full h-full">
        <Navbar />

        {/* Main section content */}
        <main className="w-full min-h-[calc(vh-72px)] 
        md:h-[calc(100%-72px)] flex flex-col items-center justify-start p-4 md:p-8 lg:justify-center ">

          {/* Wrapper for the two main columns/sections */}
          <div className="w-full h-full flex flex-col lg:flex-row md:flex-col mt-10 md:mt-0 lg:mt-0">


            {
              isLoggedIn ?
                // Logged-in view: Left column/section
                <div className="w-full lg:w-[50%] md:w-full  h-auto lg:h-full p-0 md:p-4 lg:p-10 flex flex-col gap-6 md:gap-10
                lg:mt-0 md:mt-0 mt-10 ">
                  <div>

                    {/* Adjusted text size for responsiveness */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2">Welcome back, {userName}</h1>
                    <h2 className="text-base text-gray-600">
                      Your saved studies and search history are available in your library.</h2>


                  </div>


                  <div className="w-full h-[50px]  flex items-center justify-center
                   lg:justify-start md:justify-start">

                    <h1 className="text-2xl text-white  cursor-pointer w-[150px] h-[50px] flex
                    justify-center items-center bg-black border border-black rounded
                    ">Library</h1>
                  </div>
                </div>

                :

                <div className="w-full lg:w-[50%] md:w-full  h-auto lg:h-full p-0 md:p-4 lg:p-10 flex flex-col gap-6 md:gap-10
                 md:h-[25%] lg:mt-0 md:mt-0 mt-5 ">


                  <div>


                    <h1 className="text-4xl md:text-5xl lg:text-7xl mb-2">Find Related Literature in Seconds</h1>
                    <h2 className="text-base text-gray-600">
                      Generate credible, research-based related literature from academic sources using your research title.</h2>

                  </div>


                  <div className="w-[150px] h-[50px] border flex items-center justify-center rounded bg-black">
                    <h1 className="text-2xl text-white cursor-pointer">Try now!</h1>
                  </div>

                </div>
            }



            <div className="w-full lg:w-[50%] h-auto lg:h-full flex justify-center items-start lg:items-center 
            flex-col mt-10 lg:mt-0  p-4 md:w-full">



              <div className="flex flex-col w-full  md:items-center md:flex md:justify-center">
                <h1 className="text-xl md:text-2xl mb-2 ">Enter your research title: </h1>
                <input className="w-full h-[55px] border p-4 outline-0 rounded" type="text" />

              </div>
              <button className="w-full h-[50px] border p-2 mt-5 rounded cursor-pointer bg-black text-white">Find</button>




            </div>



          </div>

          {/*Pricing Section*/}
          {
            //<div className="w-full h-[500px] border">

            //</div>
          }



        </main>


      </div>




    </div>
  );
}