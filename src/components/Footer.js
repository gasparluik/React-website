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
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/sign-up">Support</Link>
                        <Link to="/sign-up">Contacts</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social media</h2>
                        <Link to="/">LinkedIn</Link>
                        <Link to="/">Facebook</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Music</h2>
                        <Link to="/">Mixcloud</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        Neuroman <i className="fas fa-meteor" />
                    </Link>
                    </div>
                    <small className="website-rights">TRVL ® 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link github"
                        to="/"
                        target="_blank"
                        aria-label="Github"
                        >
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
