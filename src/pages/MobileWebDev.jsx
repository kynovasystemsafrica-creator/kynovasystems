import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaMobileAlt, FaLaptopCode, FaWifi, FaGlobe, FaShoppingCart, FaServer } from 'react-icons/fa';
import './ServicePage.css';

const MobileWebDev = () => {
    const highlights = [
        {
            title: 'Best suited for',
            description: 'Teams launching customer products, internal platforms, service portals, or digital workflows that need clarity and momentum.'
        },
        {
            title: 'Typical outcomes',
            description: 'Faster launches, cleaner product experiences, better maintainability, and stronger alignment between user needs and engineering decisions.'
        },
        {
            title: 'How we approach it',
            description: 'We shape the right product scope, architecture, interface direction, and delivery rhythm before the build effort starts to sprawl.'
        }
    ];

    const features = [
        {
            title: 'Native Mobile Apps',
            description: 'iOS and Android apps built with Swift, Kotlin, and platform-specific tools for optimal performance.',
            icon: <FaMobileAlt />
        },
        {
            title: 'Cross-Platform Development',
            description: 'React Native and Flutter apps that work seamlessly across multiple platforms.',
            icon: <FaLaptopCode />
        },
        {
            title: 'Progressive Web Apps',
            description: 'Modern web applications with offline capabilities and native app-like experiences.',
            icon: <FaWifi />
        },
        {
            title: 'Responsive Web Design',
            description: 'Beautiful, mobile-first websites that adapt perfectly to any screen size.',
            icon: <FaGlobe />
        },
        {
            title: 'E-Commerce Solutions',
            description: 'Full-featured online stores with secure payment processing and inventory management.',
            icon: <FaShoppingCart />
        },
        {
            title: 'API Development',
            description: 'RESTful and GraphQL APIs for seamless integration with third-party services.',
            icon: <FaServer />
        }
    ];

    return (
        <div className="service-page">
            <SEO
                title="Mobile & Web Development Services | KYNOVA"
                description="Professional mobile and web development services in Ghana. Build cutting-edge applications with React, Node.js, and modern technologies."
                keywords="mobile development, web development, React, Node.js, Ghana"
            />
            <Hero
                title="Mobile & Web Development"
                subtitle="Build powerful applications that engage users and drive business growth"
                ctaText="Start Your Project"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Crafting Digital Experiences</h2>
                        <p>
                            At KYNOVA, we specialize in creating cutting-edge mobile and web applications
                            that combine stunning design with robust functionality. Our team of experienced developers
                            uses the latest technologies and best practices to deliver solutions that exceed expectations.
                        </p>
                    </div>

                    <div className="service-highlight-grid mb-xl">
                        {highlights.map((item) => (
                            <article className="service-highlight-card" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>

                    <h3 className="section-title text-center mb-lg">What We Offer</h3>
                    <InteractiveServiceCards services={features} />

                    <div className="service-bottom-cta">
                        <div>
                            <span className="service-kicker">Need this capability?</span>
                            <h3>Let&apos;s discuss the product or platform you want to build.</h3>
                            <p>We can help shape the scope, technical approach, and delivery path that fits your timeline and business goals.</p>
                        </div>
                        <Link className="service-inline-link" to="/contact?project_type=Mobile%20%26%20Web%20Development#send-enquiry">Talk to KYNOVA</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileWebDev;
