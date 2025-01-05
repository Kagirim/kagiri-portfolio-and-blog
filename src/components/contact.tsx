import React, { useState, MouseEvent, ChangeEvent } from "react"
import axios from "axios"


export default function Contact() {
    const [status, setStatus] = useState<{ submitted: boolean, submitting: boolean, info: { error: boolean, msg: string | null } }>({ submitted: false, submitting: false, info: { error: false, msg: null } })

    const [inputs, setInputs] = useState({ email: '', message: '' })

    const handleResponse = (ok: boolean, msg: string | null ) => {
        if (ok) {
            setStatus({ submitted: true, submitting: false, info: { error: false, msg: msg } })

            setInputs({ email: '', message: '' })
        } else {
            setStatus({ submitted: false, submitting: false, info: { error: true, msg: msg } })
        }
    }

    const handleOnChange = ( e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> ) => {
        e.persist()
        setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        setStatus({ submitted: false, submitting: false, info: { error: false, msg: null }})
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
        axios({ method: 'POST', url: 'https://formspree.io/f/mvggvbdj', data: inputs})
        .then((response) => { handleResponse(true, 'Thank you, your message has been submitted.') })
        .catch((error) => { handleResponse(false, error.response.data.error) })
    }

    return (
        <div className="flex flex-row mt-24 font-mono text-darkBlue">
            <div className="mx-auto shrink">
                <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold  text-slate-300">Lets Connect</h1>
                <form onSubmit={handleOnSubmit} className="mt-10 shrink">
                    <div className="grid gap-6 sm:grid-cols-5">
                        <div className="relative z-0">
                            <input id="name" type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                            <label htmlFor="name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                        </div>
                        <div className="relative z-0">
                            <input id="email" type="email" name="_replyto" onChange={handleOnChange} required value={inputs.email} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                            <label htmlFor="email" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                        </div>
                        <div className="relative z-0 col-span-2">
                            <textarea id="message" name="message" onChange={handleOnChange} required value={inputs.message} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                            <label htmlFor="message" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                        </div>
                        <button type="submit" disabled={status.submitting} className="relative z-0 mt-5 rounded-md bg-darkBlue py-.5 px-2 text-white hover:bg-navyBlue">
                            {
                                !status.submitting
                                ? !status.submitted
                                    ? 'Submit'
                                    : 'Submitted'
                                : 'Submitting...'
                            }
                        </button>
                    </div>
                </form>
                {
                    status.info.error && ( <div className="error">Error: {status.info.msg}</div> )                  
                }
                {
                    !status.info.error && status.info.msg && <p>{status.info.msg}</p>
                }
            </div>
        </div>
    )
}