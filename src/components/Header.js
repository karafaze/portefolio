import React from 'react'

export default function Header(){
    return (
        <nav className='navbar'>
            <a href="#home" className='navbar--items'>Home</a>
            <a href="#project-list" className='navbar--items'>Projects</a>
            <a href="#form" className='navbar--items'>Contact me</a>
        </nav>
    )
}