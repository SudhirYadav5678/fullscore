import React from 'react'
import {Link, NavLink} from "react-router-dom"
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl sm:text-5xl">
                          Welcome To Fullscore
                            <span className="hidden sm:block text-2xl">Fullscore is an Education Process Outsourcing Company. It provides services in the area of Content Development and Content Support to Companies working in the field of Education. Besides that, it provides assessment & on-line e-tutoring services to companies globally.
                            Our primary objective is to provide content of the highest quality within the stipulated time. In order to achieve this, we take the help of our experienced team members and a wide pool of highly qualified and experienced 1,000+ freelancers & several sub-contractors. </span>
                        </h2>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://www.fullscore.co.in/wp-content/uploads/2020/09/about-right.jpg" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://www.fullscore.co.in/wp-content/uploads/2021/04/compass_002_hd-removebg-preview-1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">FullScore</h1>
        </div>
    );
}
