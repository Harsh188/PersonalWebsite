import './NavBar.css'
import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function NavBar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false)
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar" id='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Harsh<i class="fab fa-connectdevelop"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link smooth to='/#about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='/#hobbies' className='nav-links' onClick={closeMobileMenu}>
                                Hobbies
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;