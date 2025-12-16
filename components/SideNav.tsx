import { Book, Library, Settings, User2Icon } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";




export default function SideNav() {


    const [showNav, setShowNav] = useState<boolean>(true);
    const [longNav, setLongNav] = useState<boolean>(true);


    const handleButton = () => {
        setLongNav(!longNav);
    }


    return <nav className={` h-full items-center border-gray-300 lg:flex lg:flex-col p-3
        hidden relative duration-200 ${longNav ? "w-[250px]" : "w-[75px]"} border`}>

        <div className="size-12 rounded-[500px] flex justify-center items-center
           mb-10 border-black bg-black cursor-pointer ">
            <User2Icon className="size-8 text-white" />
        </div>

        <div className="w-full flex flex-col items-center ">
            <ul className="flex flex-col gap-5">

                <li className="cursor-pointer hover:text-green-500 flex">
                    <Book className="size-8" />
                    {
                        longNav ? <h1 className="text-2xl">Studies</h1> : null
                    }

                </li>


                <li className="cursor-pointer hover:text-green-500 flex">
                    <Library className="size-8" />
                    {
                        longNav ? <h1 className="text-2xl">Library</h1> : null
                    }
                </li>

                <li className="cursor-pointer hover:text-green-500 flex">
                    <Settings className="size-8" />
                    {
                        longNav ? <h1 className="text-2xl">Settings</h1> : null
                    }

                </li>


            </ul>


        </div>

        <button className="absolute size-8 bottom-0 mb-30 right-0 border flex
        items-center justify-center cursor-pointer rounded-[500px] bg-black" onClick={handleButton}>
            {
                longNav ? <BiLeftArrow className="text-green-400" /> : <BiRightArrow className="text-green-400 " />
            }

        </button>



    </nav>
}