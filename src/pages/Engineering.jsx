import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import SEO from '../components/SEO';
import { FaServer, FaRobot, FaProjectDiagram, FaDigitalTachograph, FaDatabase, FaCode } from 'react-icons/fa';
import './ServicePage.css';


const Engineering = () => {
    const highlights = [
        {
            title: 'Best suited for',
            description: 'Teams dealing with legacy workflows, fragmented systems, manual operations, or a growing need for cleaner digital infrastructure.'
        },
        {
            title: 'Typical outcomes',
            description: 'Less manual friction, stronger system connectivity, improved workflow visibility, and more resilient digital foundations across operations.'
        },
        {
            title: 'How we approach it',
            description: 'We focus on practical modernization, not disruption for its own sake, so engineering work supports continuity while improving long-term capability.'
        }
    ];

    const features = [
        {
            title: 'Legacy System Modernization',
            description: 'Transform outdated systems into modern, efficient applications without disrupting operations.',
            icon: <FaServer />
        },
        {
            title: 'Process Automation',
            description: 'Automate repetitive tasks and workflows to improve efficiency and reduce errors.',
            icon: <FaRobot />
        },
        {
            title: 'Enterprise Integration',
            description: 'Connect disparate systems and applications for seamless data flow across your organization.',
            icon: <FaProjectDiagram />
        },
        {
            title: 'Digital Transformation',
            description: 'Comprehensive digitization strategies to modernize your entire business operation.',
            icon: <FaDigitalTachograph />
        },
        {
            title: 'Data Migration',
            description: 'Safe and efficient migration of data from legacy systems to modern platforms.',
            icon: <FaDatabase />
        },
        {
            title: 'Custom Software Development',
            description: 'Bespoke software solutions designed to address your unique business challenges.',
            icon: <FaCode />
        }
    ];

    return (
        <div className="service-page">
            <SEO
                title="Engineering and Digitization Services | KYNOVA"
                description="Engineering and digitization services for organisations modernizing systems, automating workflows, and improving operational visibility."
                keywords="digitization, engineering services, process automation, enterprise integration, KYNOVA"
            />
            <Hero
                title="Engineering & Digitization"
                subtitle="Modernize your technology infrastructure for the digital age"
                ctaText="Start Your Transformation"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Engineering Excellence</h2>
                        <p>
                            We help organizations transition from legacy systems to modern, scalable architectures.
                            Our engineering team combines deep technical expertise with industry best practices to
                            deliver digitization solutions that drive operational excellence and business growth.
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

                    <h3 className="section-title text-center mb-lg">Engineering Services</h3>
                    <InteractiveServiceCards services={features} />

                    <div className="service-bottom-cta">
                        <div>
                            <span className="service-kicker">Modernising operations?</span>
                            <h3>Let&apos;s shape the engineering work that removes friction and builds better systems.</h3>
                            <p>We can help define the modernization path, workflow priorities, and integration approach that fits your organisation.</p>
                        </div>
                        <Link className="service-inline-link" to="/contact">Talk to KYNOVA</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Engineering;
