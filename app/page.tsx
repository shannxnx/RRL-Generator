'use client'

import Navbar from "@/components/Navbar";
import PricingCard from "@/components/PricingCard";
import SideNav from "@/components/SideNav";
import { Book, BookA, BookUser, Brain, Clock, Folder, Lock, Settings, User2Icon } from "lucide-react";
import { div } from "motion/react-client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react"


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


        <div className="w-full min-h-screen">
          <main className="w-full h-full p-4 flex flex-col items-center justify-center py-10">
            <div className="w-full max-w-7xl flex flex-col items-center gap-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-center px-4">
                Choose a perfect plan base on your needs
              </h1>
              <p className="text-lg">(One-time payment)</p>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto">
                <PricingCard cardProps={freeTier} />
                <PricingCard cardProps={miniTier} />
                <PricingCard cardProps={proTier} />
              </div>
            </div>
          </main>
        </div>



      }

      {/*Value proposition section*/}
      {
        <div className="w-screen flex flex-col items-center gap-3  max-w-screen mb-20">

          <div className="w-full  flex items-center justify-center p-10
          flex-col text-justify   lg:items-start">
            <h1 className="text-6xl mt-10 lg">Why use our tool?</h1>
            <p className="text-justify mt-5 ">
              Our platform helps students and researchers save time
              by quickly identifying relevant academic literature based on their
              research title. By sourcing studies from credible scholarly databases
              and providing AI-assisted summaries, we make it easier to understand key ideas without
              spending hours searching across multiple websites. All results can be organized in a personal
              library, allowing users to manage their research efficiently while maintaining academic integrity.</p>
          </div>


          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 w-[90%] max-w-7xl mx-auto">
            <motion.div className="border w-full h-[170px] flex flex-col items-center justify-center bg-black rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}

            >
              <Clock className="text-violet-700 size-[150px]" />
              <h1 className="text-[16px] text-white">Save Hours of Time</h1>
            </motion.div>

            <motion.div className="border w-full h-[170px] flex flex-col items-center justify-center bg-black rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <BookA className="text-violet-700 size-[150px]" />
              <h1 className="text-[16px] text-white">Credible Academic Sources</h1>
            </motion.div>


            <motion.div className="border w-full h-[170px] flex flex-col items-center justify-center bg-black rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Brain className="text-violet-700 size-[150px]" />
              <h1 className="text-[16px] text-white">AI-Assisted Summaries</h1>
            </motion.div>

            <motion.div className="border w-full h-[170px] flex flex-col items-center justify-center bg-black rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Folder className="text-violet-700 size-[150px]" />
              <h1 className="text-[16px] text-white">Personal Research Library</h1>
            </motion.div>

            <motion.div className="border w-full h-[170px] flex flex-col items-center justify-center bg-black rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Lock className="text-violet-700 size-[150px]" />
              <h1 className="text-[16px] text-white">Secure & Private</h1>
            </motion.div>
          </div>


          <div className="mt-10 flex flex-col justify-end items-end p-10  w-full">
            <div>
              <h1 className="text-6xl">Built for Academic Research</h1>

              <p className="">
                This platform assists users by suggesting relevant academic literature based on research topics.
                All results are sourced from publicly available scholarly databases and should be verified before submission.
              </p>
            </div>


          </div>










        </div>
      }



      <footer className="w-full h-[200px] border bg-black flex p-5 justify-between">
        <div className="border-1 p-3 w-[300px] h-[90%] border-white rounded">
          <h1 className="text-white lg:text-3xl">Disclaimer</h1>
          <p className="text-white text-[10px]">This tool provides AI-assisted suggestions for
            discovering related academic literature and does not guarantee
            accuracy, completeness, or acceptance by any academic institution. Users are responsible for reviewing, verifying, and properly citing all sources.</p>
        </div>

        <div className="p-2 w-[900px] h-[90%]  rounded flex">
          <div className="w-[53%] h-full flex items-end">
            <h1 className="text-white">© 2025 RRL Generator. All rights reserved.</h1>
          </div>
          <div className="w-[13%] h-full">

          </div>

          <div className="w-[33%] h-full flex flex-col text-white border-white
         justify-center text-[16px] pl-10">
            <ul>
              <li className="hover:text-purple-700 duration-200 cursor-pointer">Pricing</li>
              <li className="hover:text-purple-700 duration-200 cursor-pointer">Library</li>
              <li className="hover:text-purple-700 duration-200 cursor-pointer">About</li>
              <li className="hover:text-purple-700 duration-200 cursor-pointer">Contact</li>

            </ul>
          </div>
        </div>

      </footer>




    </div>
  );
}