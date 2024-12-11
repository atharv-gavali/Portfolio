import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
    {/** taken from getformio (ai) */ }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/aroorqob", userInfo);
            alert("Your message has been sent")
        } catch (error) {
            console.log(error)
            alert("Something went Wrong");
        }
    }

    return (
        <div
            name='Contact'
            className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
            <span> Please fill out the form below to contact me</span>
            <div className='flex flex-col items-center justify-center mt-5'>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    action="https://getform.io/f/aroorqob"
                    method='POST'
                    className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                    <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="Name"
                            className='block text-gray-700 w-96'>
                            Full Name
                        </label>
                        <input
                            {...register("name", { required: true })}    //Took from react-router-form (ai) 
                            type="text"
                            id='name'
                            name="name"
                            placeholder='Enter Your FullName'
                            className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    {/** For mail id */}
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="Name"
                            className='block text-gray-700 w-96'>
                            Email Address
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='abc123@gmail.com' required
                            {...register("email", { required: true })}                            //Took from react-router-form (ai)  
                            className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline' />
                        {errors.email && <span>This field is required</span>}
                    </div>

                    {/** for Message */}
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="Name"
                            className='block text-gray-700 w-96'>
                            Message
                        </label>
                        <textarea
                            type='text'
                            id='massage'
                            name='message'
                            placeholder='Any Message for me'
                            {...register("message", { required: true })}                         //Took from react-router-form (ai) 
                            className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline' />
                        {errors.massage && <span>This field is required</span>}
                    </div>
                    <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-blue-700 duration-300'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
