import React, {useEffect, useState} from 'react'
import ReactPlayer from "react-player";
import ReactDOM from 'react-dom'


export default function BrowsePage() {
    const [mute, setMute] = useState(true);


    return (
        <div>
            <div className="h-14 w-screen bg-black bg-opacity-100 pl-5 pt-2 flex items-center">
                <div className="text-red-600 text-2xl font-semibold hover:text-3xl transition-all duration-100"><a
                    href="#"><h1>Netflix</h1></a></div>
                <div className="flex-grow ">
                    <ul className="flex text-white space-x-8 pl-6">
                        <a href="#">
                            <li>Home</li>
                        </a>
                        <a href="#">
                            <li>TV Shows</li>
                        </a>
                        <a href="#">
                            <li>Movies</li>
                        </a>
                        <a href="#">
                            <li>News & Popular</li>
                        </a>
                        <a href="#">
                            <li>My List</li>
                        </a>
                        <a href="#">
                            <li>Browse by Language</li>
                        </a>
                    </ul>
                </div>
                <div className="flex justify-end">
                    <ul className="flex text-white space-x-3 pl-5 pr-10">
                        <a href="#" className="hover:text-xl transition-all duration-200">
                            <li>Search</li>
                        </a>
                        <a href="#" className="hover:text-xl transition-all duration-200">
                            <li>Profile</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="bg-black w-screen h-[40rem] bg-opacity-100 opacity-95 relative">
                <ReactPlayer
                    url={'http://localhost:3000/Trailers/Transformer/5'}
                    playing={true}
                    width="100%"
                    height="100%"
                    autoPlay={true}
                    muted={mute}
                    controls={false}
                    loop={true}
                />
                <div className="absolute bottom-[10rem] left-[2rem] text-center flex">
                    <button type="button"
                            className="inline-flex items-center bg-white text-gray-800 hover:bg-gray-300  focus:outline-none font-medium rounded-lg text-base px-7 py-1 text-center inline-flex items-center">
                        <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="currentColor"
                             viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                  d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                                  clip-rule="evenodd"/>
                        </svg>
                        Play
                    </button>

                    <button type="button" className=" ml-3 bg-gray-500 text-white inline-flex items-center rounded-lg px-4 py-2 bg-opacity-50 hover:bg-opacity-60">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                  d="M12 6h.01M12 12h.01M12 18h.01"/>
                        </svg>
                        More Info
                    </button>
                </div>
                <div className=" absolute bottom-10 right-[10rem] border-2 flex items-center justify-center rounded-full p-1.5 ">
                    {!mute && <button type="button" onClick={() => setMute(!mute)}>
                        <svg className="w-6 h-6 text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             viewBox="0 0 24 24">
                            <path
                                d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                            <path fill-rule="evenodd"
                                  d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z"
                                  clip-rule="evenodd"/>
                            <path fill-rule="evenodd"
                                  d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </button>}

                    {mute &&<button type="button" onClick={() => setMute(!mute)} className="bottom-[10rem]">
                        <svg className="w-6 h-6 text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             viewBox="0 0 24 24">
                            <path
                                d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"/>
                        </svg>

                    </button>}
                </div>
            </div>
        </div>
    )
}