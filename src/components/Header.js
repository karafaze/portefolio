import React from 'react'

export default function Header(){
    return (
        <header>
            <nav className='navbar' id='navbar'>
                <a href="#home" className='navbar--items'>Home</a>
                <a href="#projects" className='navbar--items'>Projects</a>
                <a href="#form" className='navbar--items'>Contact me</a>
            </nav>
        </header>
    )
}