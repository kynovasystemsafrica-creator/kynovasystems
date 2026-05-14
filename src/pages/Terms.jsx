import SEO from '../components/SEO';
import './LegalPage.css';

const Terms = () => {

    return (
        <div className="legal-page">
            <SEO
                title="Terms of Service"
                description="Read the terms that govern the use of the KYNOVA website."
                keywords="terms of service, KYNOVA terms, website terms"
            />
            <section className="legal-hero">
                <div className="container">
                    <div className="legal-shell">
                        <span className="legal-kicker">Legal</span>
                        <h1 className="legal-title">Terms of Service</h1>
                        <p className="legal-intro">
                            These terms govern the use of the KYNOVA website. By using this site, you agree to use it responsibly
                            and in a way that does not interfere with its operation or the experience of other visitors.
                        </p>

                        <div className="legal-content">
                            <section className="legal-section">
                                <h2>Website Use</h2>
                                <p>This website is provided for informational and business enquiry purposes. Content may be updated, revised, or removed at any time without notice.</p>
                            </section>

                            <section className="legal-section">
                                <h2>Intellectual Property</h2>
                                <p>Unless otherwise stated, the content, branding, design, and written materials on this site are owned by KYNOVA and may not be reproduced without permission.</p>
                            </section>

                            <section className="legal-section">
                                <h2>No Guarantee of Availability</h2>
                                <p>We aim to keep the website accurate and available, but we do not guarantee uninterrupted access or that all content will always be free from errors.</p>
                            </section>

                            <section className="legal-section">
                                <h2>External Links</h2>
                                <p>This website may include links to third-party services or websites. We are not responsible for the content, availability, or practices of those external sites.</p>
                            </section>

                            <section className="legal-section">
                                <h2>Contact</h2>
                                <p>For questions about these terms, contact us at <a href="mailto:info@kynova.com">info@kynova.com</a>.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
