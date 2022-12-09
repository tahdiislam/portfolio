import React from 'react';
import Button from '../Button/Button';

const Home = () => {
    return (
        <div className='w-1/2 mx-auto my-48 flex flex-col items-center'>
            <h1 className='text-5xl font-bold mb-10'>HEY, I'M TAHDI ISLAM</h1>
            <p className='text-xl mb-10 text-center'>
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
            </p>
            <Button>
                PROJECTS
            </Button>
        </div>
    );
};

export default Home;