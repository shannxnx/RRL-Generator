import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {




  return (
    <div className="flex flex-col h-screen items-centerbg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main className="w-full h-[calc(100%-72px)] border flex 
      flex-col items-center justify-center">


        <div className="w-[450px] h-15 border">

        </div>

      </main>


    </div>
  );
}
