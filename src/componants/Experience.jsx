import React from 'react'
import html from '../../public/html.png'
import css from '../../public/css.jpg'
import js from '../../public/javascript.png'
import react from '../../public/react.svg'
import mongodb from '../../public/mongodb.jpg'
import express from '../../public/express.png'
import node from '../../public/nd.jpeg'
import git from '../../public/git.png'
import tailwind from '../../public/tailwind.jpeg'
import bootstrap from '../../public/Bootstrap.png'

const Experience = () => {

    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },
        {
            id: 2,
            logo: css,
            name: "CSS"
        },
        {
            id: 3,
            logo: js,
            name: "JavaScript"
        },
        {
            id: 4,
            logo: react,
            name: "React"
        },
        {
            id: 5,
            logo: express,
            name: "Express.js"
        },
        {
            id: 6,
            logo: node,
            name: "Node.js"
        },
        {
            id: 7,
            logo: git,
            name: "Git"
        },
        {
            id: 8,
            logo: bootstrap,
            name: "Bootstrap"
        },
        {
            id: 9,
            logo: tailwind,
            name: "Tailwind"
        },
        {
            id: 10,
            logo: mongodb,
            name: "MongoDb"
        },
    ]

    return (
        <>
            <div
                name='Experience'
                className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                    <p className=''>I have experience in belows technology</p>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                        {cardItem.map(({ id, logo, name }) => (
                            <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-100' key='{id}'>
                                <img src={logo}
                                    className='w-[150px] rounded-full'
                                    alt="" />

                                <div className=''>{name}</div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}

export default Experience
