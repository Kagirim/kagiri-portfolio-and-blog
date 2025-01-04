export default function Contact() {
    return (
        <div className="flex flex-row mt-24 font-mono text-darkBlue">
            <div className="mx-auto shrink">
                <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold  text-slate-300">Lets Connect</h1>
                <form action="https://api.web3forms.com/submit" className="mt-10 shrink">
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
                    <div className="grid gap-6 sm:grid-cols-5">
                        <div className="relative z-0">
                            <input id="name" type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                            <label htmlFor="name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                        </div>
                        <div className="relative z-0">
                            <input id="email" type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                            <label htmlFor="email" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                        </div>
                        <div className="relative z-0 col-span-2">
                            <textarea id="message" name="message" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                            <label htmlFor="message" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                        </div>
                        <button type="submit" className="relative z-0 mt-5 rounded-md bg-darkBlue py-.5 px-2 text-white hover:bg-navyBlue">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}