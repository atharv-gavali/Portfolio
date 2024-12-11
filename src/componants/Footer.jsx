import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <a href="https://github.com/atharv-gavali"> <FaGithub className='text-2xl cursor-pointer hover:scale-110 duration-200' size={34} /></a>
                            <a href="https://www.linkedin.com/in/atharv-gavali-658371203/"><FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200' size={34} /></a>
                            <a href="https://www.facebook.com/"> <FaFacebook className='text-2xl cursor-pointer hover:scale-110 duration-200' size={34} /></a>
                            <a href="https://www.instagram.com/atharv_0074/"><FaSquareInstagram className='text-2xl cursor-pointer hover:scale-110 duration-200' size={34} /></a>
                        </div>
                        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                            <p className='text-sm'>All rights reserved.</p>
                            <p className='text-semibold'>Designed By Atharv</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
