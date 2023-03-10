import React from 'react';
import baffle from 'baffle';
import { useState, useEffect } from 'react';

function Intro() {
    const [baf, doBaf] = useState(null);

    const handleBaffle = () => {
        doBaf(baf === null ? 'not done' : 'done');
    };

    useEffect(() => {
        handleBaffle();
        const target = baffle('.obfuscated')
        if (baf === 'done') return;
        target.set({
            // characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
            characters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            speed: 111
        })
        target.start()
        target.reveal(500, 1000)

    })

    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pd-6'>
            <h1 className='text-7xl dark:text-white md:text-9xl mb-1 md:mb-3 font-bold obfuscated px-1'>
                Braeden Bertz
            </h1>
            <p className='text-base md:text-5xl mb-3 font-medium'> Software Engineer and Mathematician</p>
            <p className='text-xl max-w-7xl mb-6 font-bold'> Hello there! I am a student at the University of Wisconsin-Madison
             studying both Mathematics and Computer Science. With a passion for problem-solving and a knack for numbers, 
             I am determined to pursue a career in the field of quantitative research, trading, or software engineering. Welcome to my site!</p>
        </div>
    )
}

export default Intro;