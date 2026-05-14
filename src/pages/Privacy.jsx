import SEO from '../components/SEO';
import './LegalPage.css';

const Privacy = () => {

    return (
        <div className="legal-page">
            <SEO
                title="Privacy Policy"
                description="Read KYNOVA's privacy policy and understand how we handle personal information submitted through this website."
                keywords="privacy policy, KYNOVA privacy, data handling"
            />
            <section className="legal-hero">
                <div className="container">
                    <div className="legal-shell">
                        <span className="legal-kicker">Legal</span>
                        <h1 className="legal-title">Privacy Policy</h1>
                        <p className="legal-intro">
                            This website is designed to help visitors learn about KYNOVA and contact our team. This policy outlines
                            the information we collect, how we use it, and the steps we take to handle it responsibly.
                        </p>

                        <div className="legal-content">
                            <section className="legal-section">
                                <h2>Information We Collect</h2>
                                <p>We may collect personal information that you voluntarily provide through our contact form, such as your name, email address, phone number, subject, and message.</p>
                            </section>

                            <section className="legal-section">
                                <h2>How We Use Information</h2>
                                <p>We use submitted information to respond to enquiries, communicate about requested services, and improve the relevance of our client conversations and website experience.</p>
                            </section>

                            <section className="legal-section">
                                <h2>Cookies and Analytics</h2>
                                <p>This site may use cookies and analytics tools to understand site usage and improve performance. You can manage cookie preferences through your browser settings or the site cookie banner.</p>
                            </section>

                            <section className="legal-section">
                                <h2>Third-Party Services</h2>
                                <p>We may use third-party providers such as form-delivery and analytics services to help operate this website. These providers process information only as needed to support site functionality.</p>
                            </section>

                            <section className="legal-section">
                                <h2>Contact</h2>
                                <p>If you have questions about this policy or how information is handled, contact us at <a href="mailto:info@kynova.com">info@kynova.com</a>.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
