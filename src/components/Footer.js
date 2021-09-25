import React from 'react'
import Button from './Button'
import '../components/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive the best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time
                </p>
                <div className="input-ideas">
                    <form>
                        <input 
                        type="email"
                        name="email"
                        placeholder="Your email..."
                        className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/sign-up">Contacts</Link>
                        <Link to="/sign-up">Terms of service</Link>
                        <Link to="/sign-up">Privacy Policy</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/sign-up">Support</Link>
                        <Link to="/sign-up">Contacts</Link>
                        <Link url="linkedin.com/gaspar.luik">LinkedIn</Link>
                        <p>luik.gaspar@gmail.com</p>
                        <p>+372 55588478</p>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social media</h2>
                        <Link to="/sign-up">How it works</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
