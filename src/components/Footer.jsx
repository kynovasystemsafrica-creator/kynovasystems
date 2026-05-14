import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-shell">
                <div className="footer-inner">
                    <div className="footer-content">
                        <div className="footer-column footer-brand-column">
                            <Link className="footer-brand-logo" to="/" aria-label="KYNOVA home">
                                <img src="/logo-new.png" alt="KYNOVA" width="146" height="40" loading="lazy" />
                            </Link>
                            <p className="footer-about">
                                KYNOVA helps organisations modernise delivery across product engineering,
                                cloud, automation, and insight systems with a practical execution-first approach.
                            </p>
                        </div>

                        <div className="footer-column footer-links-column">
                            <h3 className="footer-title">Quick Links</h3>
                            <nav className="footer-nav">
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/careers">Careers</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        </div>

                        <div className="footer-column footer-services-column">
                            <h3 className="footer-title">Services</h3>
                            <nav className="footer-note-list">
                                <Link to="/engineering">Product engineering</Link>
                                <Link to="/mobile-web-development">Mobile &amp; web development</Link>
                                <Link to="/cloud-computing">Cloud modernization</Link>
                                <Link to="/consulting">Workflow consulting</Link>
                                <Link to="/graphic-design">Graphic design</Link>
                            </nav>
                        </div>

                        <div className="footer-column footer-contact-column">
                            <h3 className="footer-title">Contact</h3>
                            <div className="footer-contact">
                                <a href="mailto:info@kynova.com">info@kynova.com</a>
                                <Link to="/contact">Send an enquiry</Link>
                                <span>Accra, Ghana</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {currentYear} KYNOVA. All rights reserved.</p>
                        <div className="footer-legal">
                            <Link to="/privacy">Privacy Policy</Link>
                            <span>|</span>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
