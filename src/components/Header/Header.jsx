import React from 'react';
import './Header.css'

import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='navbar'>
            <nav>
                <div>
                    <h1>KnowladgeCafe</h1>
                </div>
                <div className='nav-links'>
                    <a href="/home">Home</a>
                    <a href="/blog">Blog</a>
                    <a href="/about">About</a>
                    <a href='/profile'>
                        <img src={profile}/>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;