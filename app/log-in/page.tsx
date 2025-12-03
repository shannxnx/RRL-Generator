'use client';

import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";










export default function SignIn() {

    const [showPassword, setShowPassword] = useState(false);







    return <main className="min-h-screen flex items-center justify-center py-12 px-4 ">

        <div className="max-w-md w-[400px] border lg:h-[550px] rounded bg-white border-none shadow-md p-8
        flex flex-col items-center">
            <h1 className="lg:font-bold text-3xl mt-15">Welcome Back!</h1>

            <div className="w-[90%] h-[45px]  mt-5 flex justify-between">

                <button className="bg-[#EA4335] w-[48%] rounded cursor-pointer flex items-center justify-center
                    shadow-md">
                    <FaGoogle className="text-[20px] text-white" />
                </button>



                <button className="w-[48%] rounded cursor-pointer flex items-center justify-center
                    bg-[#1877F2] shadow-md ">
                    <FaFacebook className="text-[20px] text-white" />
                </button>

            </div>

            <div className="w-full flex items-center justify-center">
                <p className="text-[14px] text-gray-400 mt-5">Or log in with email</p>
            </div>


            <div className="w-[90%] relative flex items-center lg:mt-10 border rounded
                border-gray-300">

                <Mail className="absolute ml-3" />
                <input type="text" placeholder={'Email'}
                    className="p-2  ml-8 outline-none  rounded
                    border-gray-400 w-full"

                    name="email"

                />
            </div>


            <div className="w-[90%] relative flex items-center lg:mt-5 border rounded
                border-gray-300">

                <Lock className="absolute ml-3" />
                <input type={showPassword ? 'text' : 'password'} placeholder={'Password'}
                    className="p-2  ml-8 outline-none  rounded
                    border-gray-400 w-full"
                    name="email"

                />
                {
                    showPassword ? <Eye className="absolute right-0 mr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                        : <EyeClosed className="absolute right-0 mr-3 cursor-pointer" onClick={() => setShowPassword(true)} />
                }


            </div>


            <button
                className={`w-[90%] border mt-8 p-2 rounded border-gray-300 `}
            >
                Login
            </button>




        </div>

    </main>
}