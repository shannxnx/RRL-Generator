'use client'
import React from 'react';
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
    const [state, handleSubmit] = useForm("xzdzyraa");

    if (state.succeeded) {
        return (
            <div className='w-full max-w-md mx-auto p-6'>
                <div className='bg-green-50 border border-green-200 rounded-lg p-4 text-center'>
                    <p className='text-green-800 font-medium'>Thanks for reaching out! We'll get back to you soon.</p>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className='w-full max-w-md mx-auto p-6 space-y-4 '>

            <div className='space-y-2'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>
                    Name
                </label>
                <input
                    id="name"
                    type="name"
                    name="name"
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition'
                    placeholder='Full Name'
                    required
                />
                <ValidationError
                    prefix="Name"
                    field="Name"
                    errors={state.errors}
                    className='text-red-500 text-sm'
                />
            </div>


            <div className='space-y-2 '>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition'
                    placeholder='your@email.com'
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="Email"
                    errors={state.errors}
                    className='text-red-500 text-sm'
                />
            </div>

            <div className='space-y-2'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none'
                    placeholder='Your message here...'
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="Message"
                    errors={state.errors}
                    className='text-red-500 text-sm'
                />
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className='w-full bg-black text-white font-medium py-2 px-4 rounded-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200'
            >
                {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}

export default function Contacts() {
    return (
        <div className='w-full min-h-screen  py-12'>
            <div className='max-w-2xl mx-auto'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl text-gray-900 mb-2'>Get in Touch</h1>
                    <p className='text-gray-600'>We'd love to hear from you. Send us a message!</p>
                </div>
                <div className=' rounded-xl shadow-sm'>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}