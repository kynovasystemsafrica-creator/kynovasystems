import { useState, useRef } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { imageAssets } from '../lib/siteAssets';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        contact_number: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, success: false, error: false, message: '' });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Missing EmailJS environment variables');
            }

            const { default: emailjs } = await import('@emailjs/browser');

            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            setFormStatus({
                loading: false,
                success: true,
                error: false,
                message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
            });

            setFormData({ user_name: '', user_email: '', contact_number: '', subject: '', message: '' });

            setTimeout(() => {
                setFormStatus({ loading: false, success: false, error: false, message: '' });
            }, 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setFormStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Something went wrong. Please try again or email us directly at info@kynova.com.'
            });
        }
    };

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <div className="contact-page contact-kynova">
            <SEO
                title="Contact Us"
                description="Get in touch with KYNOVA. We are here to help with digital delivery, cloud modernization, product engineering, and transformation work."
                keywords="contact KYNOVA, digital transformation, web development inquiry, cloud consulting"
            />

            <Breadcrumb items={breadcrumbItems} />

            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-grid">
                        <div className="contact-hero-copy">
                            <span className="contact-kicker">Contact us</span>
                            <h1>Start the conversation that moves your next digital priority forward.</h1>
                            <p className="contact-hero-text">
                                Whether you are exploring a new product, improving internal systems, modernising cloud infrastructure,
                                or clarifying a transformation roadmap, we would be glad to hear what you are working through.
                            </p>
                            <p className="contact-hero-text">
                                Share the challenge, the opportunity, or the timeline you are navigating and we will help shape the right next step.
                            </p>
                        </div>

                        <div className="contact-hero-media">
                            <div className="contact-hero-card">
                                <img
                                    src={imageAssets.meeting.src}
                                    srcSet={imageAssets.meeting.srcSet}
                                    sizes={imageAssets.meeting.sizes}
                                    width={imageAssets.meeting.width}
                                    height={imageAssets.meeting.height}
                                    alt="KYNOVA team discussing a project"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                            <div className="contact-floating-note">
                                <span>Response focus</span>
                                <strong>Practical conversations around product, cloud, workflow, and delivery priorities.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section contact-channels-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="contact-kicker">Ways to reach us</span>
                        <h2 className="section-title">Choose the contact route that fits best.</h2>
                    </div>

                    <div className="contact-channels-grid">
                        <article className="contact-channel-card">
                            <div className="contact-channel-icon"><FaEnvelope /></div>
                            <h3>Email us</h3>
                            <p>Best for project questions, partnership requests, and general enquiries that need a detailed response.</p>
                            <a href="mailto:info@kynova.com">info@kynova.com</a>
                        </article>

                        <article className="contact-channel-card">
                            <div className="contact-channel-icon"><FaPhoneAlt /></div>
                            <h3>Call us</h3>
                            <p>Reach out directly if you want to discuss an active project, a delivery need, or an urgent enquiry.</p>
                            <a href="tel:+233201876093">+233 20 187 6093</a>
                            <a href="tel:+2348034579536">+234 803 457 9536</a>
                        </article>

                        <article className="contact-channel-card">
                            <div className="contact-channel-icon"><FaMapMarkerAlt /></div>
                            <h3>Visit us</h3>
                            <p>Ministry of Foreign Affairs, No. 1 Revenue Close, Off Liberation Road, Accra, Ghana.</p>
                            <span className="contact-channel-note">Office meetings by prior arrangement.</span>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section contact-main-section">
                <div className="container">
                    <div className="contact-main-grid">
                        <div className="contact-form-panel">
                            <span className="contact-kicker">Send a message</span>
                            <h2>Tell us what you are trying to solve.</h2>
                            <p className="contact-form-intro">
                                Fill out the form below and our team will get back to you shortly.
                            </p>

                            {formStatus.success && (
                                <div className="contact-alert contact-alert-success">Success: {formStatus.message}</div>
                            )}
                            {formStatus.error && (
                                <div className="contact-alert contact-alert-error">Error: {formStatus.message}</div>
                            )}

                            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="user_name"
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="user_email"
                                            value={formData.user_email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="contact_number"
                                            value={formData.contact_number}
                                            onChange={handleChange}
                                            placeholder="+233..."
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Project enquiry"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Tell us about the challenge, timeline, or opportunity you want to discuss."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-large contact-submit"
                                    disabled={formStatus.loading}
                                >
                                    {formStatus.loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        <div className="contact-info-panel">
                            <span className="contact-kicker">Office details</span>
                            <h2>Find our Accra office.</h2>
                            <p>
                                Our office is located at the Ministry of Foreign Affairs, No. 1 Revenue Close,
                                Off Liberation Road, Accra, Ghana. Office meetings are arranged in advance so
                                the right team members can be available for your visit.
                            </p>

                            <div className="contact-info-list">
                                <div>
                                    <strong>Address</strong>
                                    <span>Ministry of Foreign Affairs, No. 1 Revenue Close, Off Liberation Road, Accra, Ghana</span>
                                </div>
                                <div>
                                    <strong>Visits</strong>
                                    <span>Office meetings by prior arrangement.</span>
                                </div>
                            </div>

                            <div className="contact-map-shell">
                                <iframe
                                    title="Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9975682851644!2d-0.17424068523755!3d5.573215995943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7b0e8b0f55%3A0x2bce99e2e4c0e0a9!2sMinistry%20of%20Foreign%20Affairs%20%26%20Regional%20Integration!5e0!3m2!1sen!2sgh!4v1707868800000!5m2!1sen!2sgh"
                                    width="100%"
                                    height="220"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="contact-bottom-note">
                        <span className="contact-kicker">What happens next</span>
                        <h3>We review enquiries with delivery context in mind.</h3>
                        <p>
                            The strongest conversations usually start with a real problem statement. If you already know the outcome
                            you need, we can help shape the execution path from there.
                        </p>
                        <a href="mailto:info@kynova.com">
                            Contact us by email <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
