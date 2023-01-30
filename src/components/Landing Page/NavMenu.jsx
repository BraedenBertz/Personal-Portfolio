import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import NavMenuItems from './NavMenuItems';

function NavMenu() {
    const [show, setShow] = useState(false);
    return (
        <nav className='top-0 fixed w-full z-50'>
            <div className={(show ? "h-full flex flex-row gap-4 bg-stone-900 relative" : "flex flex-row gap-4")} >
                <Hamburger id="hamburger" size={48} marginTop={"4px"} color="#4FD1C5" label="show menu" rounded
                    onToggle={() => setShow(toggled => !toggled)}
                />
                <NavMenuItems show={!show} />
            </div>
        </nav>
    )
}

export default NavMenu;