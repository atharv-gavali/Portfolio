import React from 'react'
import weather from '../../public/Weather.jpeg'
import stp from '../../public/sps.png'
import cloths from '../../public/cloths.jpeg'
import header from '../../public/header_img.png'

const Projects = () => {

  return (
    <>
      <div
        name="Projects"
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div>
          <h1 className=' text-3xl font-bold mb-5 '> Projects </h1>
          <span className='underline font-semibold'> Featured Projects</span>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>

            {/** for stone paper */}
            <div className='md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-100 '>
              <img src={stp} className='w-[120px} h-[120px] p-1 rounded-full border-[2px]' alt="" />
              <div>
                <div className='font-bold text-xl mb-2'>Stone Paper Scissor</div>
                <p className='px-2 text-gray-700'>This is the Stone Paper scissor game , which made by using HTML , CSS , and javascript.uderstanding besic functionality of js functions and html,css functions.</p>
              </div>

              <div className='px-6 py-4 space-x-3 justify-around'>
                <a href='https://stone-paper-scissor-game-ten.vercel.app/'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Project</button></a>
                <a href='https://github.com/atharv-gavali/stone-paper-scissor-Game'><button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button></a>
              </div>
            </div>

            {/** for ecommerce pr */}
            <div className='md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-100'>
              <img src={cloths} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
              <div>
                <div className='font-bold text-xl mb-2'>Cyber Business</div>
                <p className='px-2 text-gray-700'>The app made by using HTML , CSS , and javascript for understanding the web designing and allignment of webpage. understood the responsive technology.</p>
              </div>

              <div className='px-6 py-4 space-x-3 justify-around'>
                <a href='https://ecommerce-website-hrr9-atharv-gavalis-projects.vercel.app/'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Project</button></a>
                <a href='https://github.com/atharv-gavali/EcommerceWebsite'><button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button></a>
              </div>
            </div>

            {/** for Weather pr */}
            <div className='md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-100'>
              <img src={weather} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
              <div>
                <div className='font-bold text-xl mb-2'>Weather App</div>
                <p className='px-2 text-gray-700'>
                  Application used to detect weather data.
                  Mainly weather data as humidity, wind speed and temperature.
                  Understood the concepts of JavaScript and React
                  Used weather Api, to fetch live data.
                </p>
              </div>

              <div className='px-6 py-4 space-x-3 justify-around'>
                <a href='https://weather-react-git-main-atharv-gavalis-projects.vercel.app/'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Project</button></a>
                <a href='https://github.com/atharv-gavali/Weather_React'><button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button></a>
              </div>
            </div>

            {/** for foody pr */}
            <div className='md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-100'>
              <img src={header} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
              <div>
                <div className='font-bold text-xl mb-2'>Foody</div>
                <p className='px-2 text-gray-700'>
                  Complete responsive website.
                  Using JavaScript for different functionality for adding product making payment.
                  Understood all JavaScript and React vite terminology.
                  mobile responsive with user input validation.
                </p>
              </div>

              <div className='px-6 py-4 space-x-3 justify-around'>
                <a href='https://foodyy-vo9s.vercel.app/'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Project</button></a>
                <a href='https://github.com/atharv-gavali/foodyy'><button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button></a>
              </div>
            </div>



          </div>
        </div>
      </div>
      <hr />
    </>
  )
}


export default Projects
