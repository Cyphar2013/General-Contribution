import React from 'react'

export default function Sidebar() {
    return (
        <div className="w-[15%] border border-gray-400 h-screen overflow-y-scroll ">
            <div className='py-4 border-b border-gray-400'>
                <div className='flex justify-center'>
                    <img src={profile} className='rounded-full h-[80px] w-[80px]' />
                </div>
                <div className="text-center">
                    <p className="text-base font-bold">Agba Teslim</p>
                    <span className="text-xs text-gray-700">18 jul 1963, years</span>
                    <p className="text-sm font-bold">Lagos, Nigeria</p>
                </div>
            </div>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Dashboard</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Favourites</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Dependant</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Message</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Account</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Orders</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Add Medical Records</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Medical Details</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Profile Settings</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 border-b border-gray-400'>
                    <span className='text-sm font-medium'>Change Password</span>
                </div>
            </a>
            <a href=''>
                <div className='p-3 '>
                    <span className='text-sm font-medium'>Log Out</span>
                </div>
            </a>


        </div>
    )
}
