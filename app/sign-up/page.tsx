'use client'

import { Supabase } from "@/lib/supabaseClient"
import { Check, Eye, EyeClosed, Lock, Mail, PointerOffIcon, User } from "lucide-react"
import React, { useEffect, useState } from "react"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Metadata } from "next"





interface SignUpForm {
    userName: string,
    email: string,
    password: string,
    confirmPassword: string
};


const empty: SignUpForm = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
};






export default function SignUp() {

    const [showPassword, setShowPassword] = useState(false);

    const [signUpForm, setSignUpForm] = useState(empty);
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm({
            ...signUpForm, [e.target.name]: e.target.value
        })
    };


    useEffect(() => {

        const confirmPassword = (form: SignUpForm) => {


            if (form.confirmPassword === form.password && form.confirmPassword !== '') {
                setIsPasswordMatch(true);
            } else {
                setIsPasswordMatch(false);
            }
        };

        confirmPassword(signUpForm);


    }, [signUpForm.confirmPassword, signUpForm.password]);


    const handleSignUp = async () => {
        const { userName, email, password, confirmPassword } = signUpForm;

        if (!userName || !email || !password) {
            return window.alert("Fill out all neccessary details!");

        }

        const { data: authData, error: authError } = await Supabase.auth.signUp({
            email,
            password: confirmPassword
        });


        if (authError) {
            console.error("Sgn Up Error: ", authError);
            return;
        } else {
            console.log("Auth : ", authData);
        };


        const user = authData.user;

        if (user) {
            const { error: updateError } = await Supabase.from('userInformation').insert({
                user_name: userName,
            });

            if (updateError) {
                console.error("Update error: ", updateError);
            }
        }

    }





    return <main className="min-h-screen flex items-center justify-center py-12 px-4 bg-gray-100">
        <div className="max-w-md w-[400px] border lg:h-[550px] rounded bg-white border-none shadow-md p-8
        flex flex-col items-center">
            <div className=" h-[95%] rounded flex flex-col items-center w-full">
                <h1 className="lg:font-bold text-3xl">Create your account</h1>

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
                    <p className="text-[14px] text-gray-400 mt-5">Or sign up with email</p>
                </div>


                <div className="w-[90%] relative flex items-center mt-5 border rounded
                border-gray-300">
                    <User className="absolute ml-3" />
                    <input type="text" placeholder={'User Name'}
                        className="p-2  ml-8 outline-none  rounded
                    border-gray-400 w-full"
                        onChange={handleChange}
                        value={signUpForm.userName}
                        name="userName"

                    />
                </div>


                <div className="w-[90%] relative flex items-center mt-5 border rounded
                border-gray-300">
                    <Mail className="absolute ml-3" />
                    <input type="text" placeholder={'Email'}
                        className="p-2  ml-8 outline-none  rounded
                    border-gray-400 w-full"
                        onChange={handleChange}
                        value={signUpForm.email}
                        name="email"

                    />
                </div>

                <div className="w-[90%] relative flex items-center mt-5 border rounded
                border-gray-300">
                    <Lock className="absolute ml-3" />
                    <input type={showPassword ? 'text' : 'password'}

                        placeholder={'Password'}
                        className="p-2  ml-8 outline-none  rounded
                    border-gray-400 w-full"
                        onChange={handleChange}
                        value={signUpForm.password}
                        name="password"

                    />


                    {
                        showPassword ? <Eye className="absolute right-0 mr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                            : <EyeClosed className="absolute right-0 mr-3 cursor-pointer" onClick={() => setShowPassword(true)} />
                    }


                </div>



                <div className="w-[90%] relative flex items-center mt-5 border rounded
                border-gray-300">
                    {
                        isPasswordMatch ? <Check className="absolute ml-3 text-green-400" />
                            : <Check className="absolute ml-3 text-red-500" />
                    }

                    <input type="password" placeholder={'Confirm Password'}
                        className="p-2  ml-8 outline-none  rounded
                    border-gray-400 w-full"
                        onChange={handleChange}
                        name="confirmPassword"
                        value={signUpForm.confirmPassword}

                    />

                </div>


                <button className={`w-[90%] border mt-8 p-2 rounded border-gray-300 
                ${isPasswordMatch ? 'cursor-pointer' : 'cursor-not-allowed'}
                ${isPasswordMatch ? 'bg-green-400' : 'bg-gray-200'}
                `}
                    disabled={isPasswordMatch ? false : true}

                    onClick={handleSignUp}
                >
                    Sign Up
                </button>



            </div>
            <p className="text-[12px] mt-2">Already have an account? <a href="/log-in"><span className="text-blue-400 cursor-pointer">Log In</span></a>
            </p>
        </div>
    </main>
}