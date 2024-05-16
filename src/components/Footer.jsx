import React from 'react'
import {Link, NavLink} from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://www.fullscore.co.in/wp-content/uploads/2021/04/compass_002_hd-removebg-preview-1.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/About" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">CONTACT DETAILS</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="hover:underline">
                                    
                                    Call us: +91 (984)-931-6775
                                    
                                </li>
                                <li className="hover:underline">
                                    Address: MIG-402, Sector A-10, Narela, Delhi-110040, India
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    </div>
                </div>
            </div>
        </footer>
    );
}
