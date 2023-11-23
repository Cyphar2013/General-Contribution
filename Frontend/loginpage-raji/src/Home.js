const Home = () => {
    return (
        <div>
            <container class="m-0 auto max-w-fit min-h-min">
                <div class="flex">
                    <h1 class="font-bold text-blue-500">Health</h1>
                    <h1 class="font-bold text-green-200">Connect</h1>
                </div>
                <main class="bg-gradient-to-t from-green-200 to-white-900 max-w-5xl min-h-fit rounded-3xl border-4 border-none hover:border-blue-500 shadow-gray-500 shadow-2xl mx-auto py-5">
                    <div class="">
                        <div>
                            <h1 class="my-20 flex justify-center font-bold">Join as a Doctor or Patient</h1>
                        </div>

                        <div class="flex justify-evenly mt-20 font-san">
                            <div class="w-68 h-56 border-2 br-10 white rounded-3xl p-10 justify-center  border-black">
                                <div class="w-6 h-6 border-2 white rounded-xl relative left-60 border-black"></div>
                                <h1 class="text-black mt-20 font-bold">I'm a Doctor, Looking for Patient.</h1>
                            </div>

                            <div class="w-68 h-56 border-2 br-10 white rounded-3xl p-7 border-black">
                                <div class="w-6 h-6 border-2 white rounded-xl relative left-60  border-black"></div>
                                <h1 class="text-black mt-20 font-bold">I'm a Patient Looking for a Doctor.</h1>
                            </div>
                        </div>

                        <div class="flex justify-center my-5">
                            <button class="bg-blue-500 text-white color-white w-96 rounded-full my-10 py-4 font-bold">Create Account</button>
                        </div>

                        <div>
                            <h1 class="my-5 flex justify-center font-bold">Already have an account?Log in</h1>
                        </div>
                    </div>
                </main>
            </container>

        </div>
    );
}
export default Home;