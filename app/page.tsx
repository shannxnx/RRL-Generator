'use client'

import Navbar from "@/components/Navbar";
import PricingCard from "@/components/PricingCard";
import SideNav from "@/components/SideNav";
import { Book, Settings, User2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


interface cardProps {
  tier: string,
  price?: string,
  benefits?: string[]
};



const freeTier: cardProps = {
  tier: 'Free',
  price: '0',
  benefits: [
    ' 🔍 5 RRL searches every 3 days',
    ' 📚 Up to 5 related studies per search',
    ' 🧠 Basic abstracts only (no AI rewrite)',
    ' 💾 Save up to 5 studies'
  ]
};

const miniTier: cardProps = {
  tier: 'Mini',
  price: '2',
  benefits: [
    ' 🔓 Unlimited RRL searches',
    ' 📚 Up to 5–10 studies per search',
    ' 🧠 AI-generated summaries',
    ' 💾 Save unlimited studies',
    ' 📄 Copy-ready RRL text'

  ]
};


const proTier: cardProps = {
  tier: 'Pro',
  price: '5',
  benefits: [
    '⚡Everything in Mini',
    '📚 10–15 studies per search',
    '🧠 Detailed academic summaries ',
    '📄 Export to Word / PDF',
    '🧾 APA/MLA citation formatting',
    '🚀 Priority processing'
  ]
}









export default function Home() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName] = useState('Shann Rhey')


  return (
    <div className="flex flex-col relative w-screen  items-center bg-zinc-50 font-sans dark:bg-black
    overflow-y-scroll">


      {

        isLoggedIn ? <SideNav />
          : null
      }


      {/* Main content container */}
      <div className="w-full h-screen ">
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





        </main>


      </div>


      {/*Pricing Section*/}
      {
        <div className="w-full h-screen">

          <main className="w-full h-full lg:p-4 flex flex-col items-center justify-center">

            <div className="w-[95%] h-[90%] flex-col flex items-center justify-between">

              <h1 className="lg:text-5xl">Choose a perfect plan base on your needs</h1>
              <p>(One-time payment)</p>
              <div className="w-full h-[420px] flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-10 lg:gap-16">


                <PricingCard cardProps={freeTier} />
                <PricingCard cardProps={miniTier} />
                <PricingCard cardProps={proTier} />


              </div>


            </div>

          </main>
        </div>
      }




    </div>
  );
}