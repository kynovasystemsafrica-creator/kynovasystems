import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import SEO from '../components/SEO';
import { FaChess, FaSearch, FaMapSigns, FaCogs, FaHandshake, FaExchangeAlt } from 'react-icons/fa';
import './ServicePage.css';


const Consulting = () => {
    const highlights = [
        {
            title: 'Best suited for',
            description: 'Leaders who need clearer direction around digital priorities, technology decisions, delivery models, or transformation planning.'
        },
        {
            title: 'Typical outcomes',
            description: 'Sharper roadmaps, better investment choices, reduced delivery confusion, and stronger alignment between business needs and technical execution.'
        },
        {
            title: 'How we approach it',
            description: 'We combine strategic thinking with practical delivery context so recommendations can actually be implemented and measured.'
        }
    ];

    const features = [
        {
            title: 'Digital Strategy',
            description: 'Develop comprehensive digital strategies aligned with your business objectives.',
            icon: <FaChess />
        },
        {
            title: 'Technology Assessment',
            description: 'Evaluate your current technology stack and identify opportunities for improvement.',
            icon: <FaSearch />
        },
        {
            title: 'IT Roadmapping',
            description: 'Create detailed technology roadmaps to guide your digital transformation journey.',
            icon: <FaMapSigns />
        },
        {
            title: 'Process Optimization',
            description: 'Streamline business processes with technology solutions that increase efficiency.',
            icon: <FaCogs />
        },
        {
            title: 'Vendor Selection',
            description: 'Expert guidance in selecting the right technology partners and solutions.',
            icon: <FaHandshake />
        },
        {
            title: 'Change Management',
            description: 'Support your organization through technology transitions with minimal disruption.',
            icon: <FaExchangeAlt />
        }
    ];

    return (
        <div className="service-page">
            <SEO
                title="Consulting Services | KYNOVA"
                description="Practical consulting services for digital strategy, roadmap planning, process improvement, and transformation decision-making."
                keywords="digital consulting, IT consulting, digital strategy, roadmap, process optimization, KYNOVA"
            />
            <Hero
                title="IT Consulting Services"
                subtitle="Strategic guidance to navigate your digital transformation"
                ctaText="Schedule Consultation"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Expert Strategic Guidance</h2>
                        <p>
                            Our consulting services help organizations make informed technology decisions that drive
                            business value. With years of industry experience, we provide strategic insights and
                            practical recommendations tailored to your unique challenges and goals.
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

                    <h3 className="section-title text-center mb-lg">Consulting Services</h3>
                    <InteractiveServiceCards services={features} />

                    <div className="service-bottom-cta">
                        <div>
                            <span className="service-kicker">Need strategic clarity?</span>
                            <h3>Let&apos;s turn uncertainty into a practical delivery direction.</h3>
                            <p>We can help you define the next steps, the right priorities, and the shape of the execution effort ahead.</p>
                        </div>
                        <Link className="service-inline-link" to="/contact">Talk to KYNOVA</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Consulting;
