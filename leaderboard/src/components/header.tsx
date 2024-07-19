// src/components/Header.tsx
import React from 'react';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
               <div className="cont">
               <h1>Gilly's&nbsp;&nbsp;&nbsp;&nbsp;</h1>
               <img src={logo} alt="why" />
               </div>
                <div className="header-buttons">
                    <button>Menu</button>
                    <button>tab</button>
                    <button>Contact</button>
                    <button>home</button> 
                </div>
            </div>
        </header>
    );
};

export default Header;
