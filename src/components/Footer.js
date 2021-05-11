import React from 'react';
import './Footer.css'
import { HashLink as Link } from 'react-router-hash-link';

function Footer(){
	return(
		<div className="footer" id='footer'>
			<Link smooth to='/#navbar' className='footer-logo'>
                        Harsh<i class="fab fa-connectdevelop"></i>
			</Link>
			<div>
				<p className='footer-copyright'>Copyright <span>&#169;</span> 2021 Harshith MohanKumar</p> 
			</div>
		</div>
	);
}

export default Footer;