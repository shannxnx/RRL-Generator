'use client'




export default function SignUp() {
    return <main className="min-h-screen flex items-center justify-center py-12 px-4 bg-gray-200">
        <div className="max-w-md w-[400px] border lg:h-[550px] rounded bg-white border-none shadow-md p-8">
            <div className=" h-[95%] rounded flex flex-col items-center">
                <h1 className="text-3xl font-bold">Create your account</h1>

                <div className="w-[90%] h-[45px]  mt-5 flex justify-between">
                    <button className="border w-[48%] rounded cursor-pointer">Google</button>
                    <button className="border w-[48%] rounded cursor-pointer">Facebook</button>
                </div>

                <div className="w-full flex items-center justify-center">
                    <p className="text-[14px] text-gray-400 mt-5">Or sign up with email</p>
                </div>

                <input type="text" placeholder={'User Name'}
                    className="w-[90%] p-2 mt-5 outline-none border rounded
                    border-gray-300" />

                <input type="text" placeholder={'Email'}
                    className="w-[90%] p-2 mt-5 outline-none border rounded
                    border-gray-300" />

                <input type="text" placeholder={'Password'}
                    className="w-[90%] p-2 mt-5 outline-none border rounded
                    border-gray-300" />

                <input type="text" placeholder={'Confirm Password'}
                    className="w-[90%]  p-2 mt-5 outline-none border rounded
                    border-gray-300" />


                <button className="w-[90%] border mt-8 p-2 rounded border-gray-300 bg-gray-200
                cursor-pointer">Sign Up</button>





            </div>
        </div>
    </main>
}