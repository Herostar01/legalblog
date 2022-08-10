import React from 'react'
import "./navbar.css"

function NavBar() {

    return (

    <div
    className='nav'
    >
        <div className="topLeft"> 
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter"> 
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">  
            <img 
            className='topImg'
            src="https://ae01.alicdn.com/kf/H7b8a8b581b4d45ff92894ba3bc21d3f0T/Handsome-Casual-Brown-Men-Wedding-Tuxedo-Groom-Suits-Shawl-Lapel-Slim-Fit-One-Button-Business-Prom.jpg_Q90.jpg_.webp" 
            alt="Handsome Man in Brown Suit" 
            
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>

    );
}

export default NavBar;