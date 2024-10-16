import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import nav_logo from '../Assets/nav-logo.png'
import ContactUsPage from '../../Pages/ContactUs'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            {/* <img src={nav_logo} alt=''/> */}
            <h1 style={{color: "red"}}>ShopHUB</h1>
        </div>
        <ul className="footer-links">
            <li>Branches</li>
            <li>Products</li>
            <li>About Us</li>
            <li><Link style={{textDecoration:'none'}} to='/contactus'>Contact Us</Link></li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer