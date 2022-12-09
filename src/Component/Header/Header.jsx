import React from 'react';
import photo from "../../assets/Tahdi-Islam.jpg"

const Header = () => {
    return (
        <nav className='flex items-center justify-between mx-16 py-4 text-xl font-semibold'>
            <div className='flex w-1/4 items-center'>
                <img className='h-16 w-16 rounded-full' src={photo} alt="" />
                <h2 className='ml-4'>TAHDI ISLAM</h2>
            </div>
            <div>
                <ul className='flex ml-6'>
                    <li className='ml-12'>HOME</li>
                    <li className='ml-12'>ABOUT</li>
                    <li className='ml-12'>PROJECT</li>
                    <li className='ml-12'>CONTACT</li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;