import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

import { ReactTyped } from "react-typed";

{/*import pic from "../../public/photo.avif";*/ }
import photo from "/Atharv....jpg";


const Home = () => {
  return (
    <>
      <div
        name='Home'
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row '>

          <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello, I'm a </h1>
              {/*<span className='text-red-700 font-bold'> Developer</span>*/}
              <ReactTyped
                className='text-red-700 font-bold'
                strings={["Devloper", "Programmer", "Coder"]}
                typeSpeed={40}
                backspeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className='text-sm md:text-md text-justify font-semibold'>
              Passionate MERN Stack Developer with expertise in building dynamic and scalable web applications. I have hands-on experience in <span className='text-red-700 font-bold'>HTML, CSS, JavaScript, React, Node.js, MongoDB,<span className='text-black-400'> &</span> Express.js</span> enabling me to create full-stack solutions that are both user-friendly and efficient. Constantly evolving in the world of web development, I am always eager to learn new technologies and apply them to deliver impactful digital experiences.
            </p>
            <br />

            {/* SocialMedia Icons */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold'>Available on</h1>
                <ul className='flex space-x-5 '>
                  <li><a href="https://www.linkedin.com/in/atharv-gavali-658371203/"><FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200' /></a> </li>
                  <li><a href="https://github.com/atharv-gavali"> <FaGithub className='text-2xl cursor-pointer hover:scale-110 duration-200' /></a></li>
                  <li><a href="https://www.facebook.com/"> <FaFacebook className='text-2xl cursor-pointer hover:scale-110 duration-200' /></a></li>
                  <li><a href="https://www.instagram.com/atharv_0074/"><FaSquareInstagram className='text-2xl cursor-pointer hover:scale-110 duration-200' /></a></li>
                </ul>
              </div>

              <div className='space-y-2'>
                <h1 className='font-bold'>Currently Working on</h1>
                <div className='flex space-x-5 '>
                  <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  <RiNodejsLine className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                </div>
              </div>

            </div>
          </div>


          <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
            <img src={photo} className='rounded-full md:w-[450px] md:h-[450]' alt="" /></div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home
