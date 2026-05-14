import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaLaptopCode, FaPaintBrush, FaCloud, FaServer, FaBullhorn, FaTasks, FaGlobeAfrica, FaUsers, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { imageAssets } from '../lib/siteAssets';
import './Careers.css';

const Careers = () => {
    const benefits = [
        {
            title: 'Meaningful Delivery Work',
            description: 'You will contribute to product, platform, and transformation work that helps organisations solve real operational problems.',
            icon: <FaChartLine />
        },
        {
            title: 'Collaborative Team Culture',
            description: 'We value clear communication, shared problem-solving, and a working environment where strong ideas can come from anywhere.',
            icon: <FaUsers />
        },
        {
            title: 'Flexible Ways of Working',
            description: 'Our teams are built around practical collaboration, with room for hybrid and remote contribution depending on the role.',
            icon: <FaGlobeAfrica />
        }
    ];

    const positions = [
        {
            title: 'Senior Full Stack Developer',
            description: 'Accra, Ghana / Remote • Full-time • Build modern web applications, internal systems, and connected digital products with a strong focus on maintainability and execution quality.',
            icon: <FaLaptopCode />,
            link: '/contact',
            linkText: 'Apply Now',
            image: imageAssets.meeting.src
        },
        {
            title: 'UI/UX Designer',
            description: 'Accra, Ghana • Full-time • Shape user-centered product experiences, design systems, and interface flows that support clear, practical digital delivery.',
            icon: <FaPaintBrush />,
            link: '/contact',
            linkText: 'Apply Now',
            image: imageAssets.team.src
        },
        {
            title: 'Cloud Solutions Architect',
            description: 'Accra, Ghana / Remote • Full-time • Design resilient cloud environments and modernization paths that support scale, visibility, and stronger engineering workflows.',
            icon: <FaCloud />,
            link: '/contact',
            linkText: 'Apply Now',
            image: imageAssets.presentation.src
        },
        {
            title: 'DevOps Engineer',
            description: 'Remote • Full-time • Improve reliability through deployment automation, observability, infrastructure workflows, and practical release discipline.',
            icon: <FaServer />,
            link: '/contact',
            linkText: 'Apply Now',
            image: imageAssets.presentation.src
        },
        {
            title: 'Digital Marketing Specialist',
            description: 'Accra, Ghana • Full-time • Help clarify our market presence through better campaigns, stronger messaging, content planning, and digital growth initiatives.',
            icon: <FaBullhorn />,
            link: '/contact',
            linkText: 'Apply Now',
            image: imageAssets.meeting.src
        },
        {
            title: 'Project Manager',
            description: 'Accra, Ghana • Full-time • Guide cross-functional digital work with stronger planning, stakeholder visibility, risk management, and delivery coordination.',
            icon: <FaTasks />,
            link: '/contact',
            linkText: 'Apply Now',
            image: imageAssets.team.src
        }
    ];

    return (
        <div className="careers-page careers-kynova">
            <SEO
                title="Careers at KYNOVA"
                description="Explore careers at KYNOVA and join a team focused on product engineering, cloud modernization, design, and digital delivery."
                keywords="KYNOVA careers, jobs, digital transformation jobs, engineering, design, cloud"
            />
            <section className="careers-hero">
                <div className="container">
                    <div className="careers-hero-grid">
                        <div className="careers-hero-copy">
                            <span className="careers-kicker">Careers</span>
                            <h1>Join a team building sharper digital systems for modern organisations.</h1>
                            <p className="careers-hero-text">
                                KYNOVA brings together strategy, design, engineering, and delivery discipline to help
                                organisations move with more clarity. We are building a team of people who care about
                                good work, strong collaboration, and practical impact.
                            </p>
                            <p className="careers-hero-text">
                                If you enjoy solving meaningful problems and contributing to digital work that actually
                                helps teams operate better, we would love to hear from you.
                            </p>
                        </div>

                        <div className="careers-hero-media">
                            <div className="careers-hero-card">
                                <img
                                    src={imageAssets.team.src}
                                    srcSet={imageAssets.team.srcSet}
                                    sizes={imageAssets.team.sizes}
                                    width={imageAssets.team.width}
                                    height={imageAssets.team.height}
                                    alt="KYNOVA team collaboration"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                            <div className="careers-floating-note">
                                <span>What to expect</span>
                                <strong>Collaborative delivery, thoughtful execution, and room to grow across product, cloud, design, and operations work.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section careers-story-section">
                <div className="container">
                    <div className="careers-story-grid">
                        <article className="careers-story-card">
                            <span className="careers-kicker">Why KYNOVA</span>
                            <h2>We are growing a delivery culture built on clarity, curiosity, and accountability.</h2>
                            <p>
                                The best teams are not just technically strong. They communicate clearly, learn quickly,
                                support each other, and stay grounded in the outcomes the work is meant to create.
                            </p>
                            <p>
                                At KYNOVA, we care about practical excellence. That means thoughtful problem-solving,
                                visible progress, stronger systems, and a team environment where your contribution has
                                real shape and weight.
                            </p>
                        </article>

                        <div className="careers-aside-stack">
                            <article className="careers-mini-panel">
                                <span className="careers-kicker">How we work</span>
                                <h3>Small teams. Clear ownership. Better execution.</h3>
                                <p>We value focused collaboration, direct communication, and delivery habits that help good work move forward without unnecessary friction.</p>
                            </article>
                            <article className="careers-mini-panel">
                                <span className="careers-kicker">What we value</span>
                                <h3>People who combine initiative with strong teamwork.</h3>
                                <p>We look for thoughtful contributors who can take responsibility, ask sharp questions, and help create calm, steady momentum in the work.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section careers-benefits-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="careers-kicker">Working here</span>
                        <h2 className="section-title">What you gain by joining the team.</h2>
                    </div>

                    <div className="careers-benefits-grid">
                        {benefits.map((benefit) => (
                            <article className="careers-benefit-card" key={benefit.title}>
                                <div className="careers-benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section careers-roles-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="careers-kicker">Open roles</span>
                        <h2 className="section-title">Current opportunities at KYNOVA.</h2>
                        <p className="section-subtitle">
                            Explore open positions across engineering, design, delivery, and growth. Each role is connected to the kind of practical, high-impact work we want to do more of.
                        </p>
                    </div>

                    <InteractiveServiceCards services={positions} />

                    <div className="careers-cta-panel">
                        <div>
                            <span className="careers-kicker">No exact fit?</span>
                            <h3>Strong people do not always fit neatly into listed roles.</h3>
                            <p>If you think you could add value to KYNOVA, send us your background and tell us where you would make the biggest contribution.</p>
                        </div>
                        <Link className="careers-cta-link" to="/contact">
                            Send Your Resume <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
