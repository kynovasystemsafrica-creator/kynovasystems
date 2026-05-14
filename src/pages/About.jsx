import { Link } from 'react-router-dom';
import { FaHandshake, FaChartLine, FaGlobeAfrica, FaArrowRight } from 'react-icons/fa';
import SEO from '../components/SEO';
import { imageAssets } from '../lib/siteAssets';
import './About.css';

const About = () => {
    const values = [
        {
            title: 'Partnership',
            description: 'We work closely with clients as delivery partners, not just external vendors, so the work stays aligned with real business priorities.',
            icon: <FaHandshake />
        },
        {
            title: 'Outcomes-Focused',
            description: 'We care about measurable progress, stronger execution, and practical systems that help teams move with more clarity and confidence.',
            icon: <FaChartLine />
        },
        {
            title: 'Long-Term Impact',
            description: 'We design digital solutions that can scale, adapt, and continue creating value as organisations grow and evolve.',
            icon: <FaGlobeAfrica />
        }
    ];

    const leaders = [
        {
            name: 'Ama Boateng',
            role: 'Head of Delivery',
            image: imageAssets.leaderAma,
            summary: '12+ years leading transformation programs across Africa and Europe.',
            detail: 'Ama brings operational structure, stakeholder coordination, and delivery rhythm to complex digital initiatives that need momentum and trust.'
        },
        {
            name: 'Kwesi Mensah',
            role: 'Lead Solutions Architect',
            image: imageAssets.leaderKwesi,
            summary: '10+ years building cloud platforms, integrations, and internal systems.',
            detail: 'Kwesi shapes resilient technical foundations that connect architecture decisions with practical delivery, modernization, and long-term maintainability.'
        },
        {
            name: 'Naa Adjeley',
            role: 'Senior Product Strategist',
            image: imageAssets.leaderNaa,
            summary: 'Specialist in service design, product delivery, and digital operating models.',
            detail: 'Naa helps turn ambiguity into direction, bringing sharper product thinking and business clarity to systems, workflows, and user experiences.'
        }
    ];

    return (
        <div className="about-page about-kynova">
            <SEO
                title="About KYNOVA"
                description="Learn about KYNOVA's delivery approach, leadership team, values, and the practical digital transformation support we provide."
                keywords="KYNOVA about, digital transformation, product engineering, cloud modernization, delivery team"
            />
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-grid">
                        <div className="about-hero-copy">
                            <span className="about-kicker">About us</span>
                            <h1>Creating clarity, momentum, and stronger digital execution.</h1>
                            <p className="about-hero-text">
                                KYNOVA helps organisations modernise the way they build, operate, and deliver.
                                We bring product, platform, cloud, and workflow expertise together so teams can
                                move from ambition to measurable execution with less friction.
                            </p>
                            <p className="about-hero-text">
                                Our work is shaped by a simple belief: meaningful digital change happens when
                                strategy, systems, and delivery discipline are designed to support each other.
                            </p>
                        </div>

                        <div className="about-hero-media">
                            <div className="about-hero-card">
                                <img
                                    src={imageAssets.homeHero.src}
                                    srcSet={imageAssets.homeHero.srcSet}
                                    sizes={imageAssets.homeHero.sizes}
                                    width={imageAssets.homeHero.width}
                                    height={imageAssets.homeHero.height}
                                    alt="KYNOVA leadership and delivery collaboration"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                            <div className="about-floating-note">
                                <span>Execution-first</span>
                                <strong>Structured teams for product, cloud, workflow, and insight delivery.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-story-section">
                <div className="container">
                    <div className="about-story-grid">
                        <div className="about-story-card">
                            <span className="about-kicker">Our story</span>
                            <h2>Building practical digital capacity for organisations that need to move.</h2>
                            <p>
                                KYNOVA was built around a recurring challenge we saw across growing organisations:
                                the right digital priorities were often clear, but execution capacity was fragmented,
                                overstretched, or hard to assemble quickly.
                            </p>
                            <p>
                                We created KYNOVA to close that gap with a more integrated delivery model. One that
                                combines technical expertise, structured collaboration, and business-minded execution
                                so digital work becomes easier to shape, launch, and sustain.
                            </p>
                        </div>

                        <div className="about-mission-stack">
                            <article className="about-mini-panel">
                                <span className="about-kicker">Our mission</span>
                                <h3>Help organisations deliver better digital systems with greater confidence.</h3>
                                <p>We bring focused teams, practical architecture, and visible execution to the work that matters most.</p>
                            </article>
                            <article className="about-mini-panel">
                                <span className="about-kicker">Our vision</span>
                                <h3>Be a trusted delivery partner for modern organisations across Africa and beyond.</h3>
                                <p>We want digital transformation to feel more grounded, more measurable, and more achievable for ambitious teams.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-values-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="about-kicker">Our core values</span>
                        <h2 className="section-title">The way we work matters as much as the work itself.</h2>
                    </div>

                    <div className="about-values-grid">
                        {values.map((value) => (
                            <article className="about-value-card" key={value.title}>
                                <div className="about-value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section about-team-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="about-kicker">Leadership</span>
                        <h2 className="section-title">A team shaped by strategy, systems, and delivery experience.</h2>
                        <p className="section-subtitle">
                            Our leadership approach combines operational discipline, technical depth, and product thinking to keep execution grounded in real outcomes.
                        </p>
                    </div>

                    <div className="about-team-grid">
                        {leaders.map((leader) => (
                            <article className="about-team-card" key={leader.name}>
                                <img
                                    className="about-team-image"
                                    src={leader.image.src}
                                    srcSet={leader.image.srcSet}
                                    sizes={leader.image.sizes}
                                    width={leader.image.width}
                                    height={leader.image.height}
                                    alt={leader.name}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="about-team-copy">
                                    <h3>{leader.name}</h3>
                                    <p className="about-team-role">{leader.role}</p>
                                    <p className="about-team-summary">{leader.summary}</p>
                                    <p>{leader.detail}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section about-name-section">
                <div className="container">
                    <div className="about-name-grid">
                        <div className="about-name-panel">
                            <span className="about-kicker">What KYNOVA stands for</span>
                            <h2>Progress that feels intelligent, intentional, and built to last.</h2>
                            <p>
                                The KYNOVA brand reflects the kind of work we believe in: modern systems,
                                sharper visibility, better coordination, and delivery approaches that create
                                lasting momentum instead of short-lived fixes.
                            </p>
                            <p>
                                Our role is not simply to ship features. It is to help organisations create
                                stronger digital foundations, clearer operating rhythms, and more confident
                                decision-making across teams.
                            </p>
                        </div>

                        <div className="about-name-aside">
                            <div className="about-name-badge">KYNOVA</div>
                            <p>
                                A name built to evoke motion, capability, and renewal. It reflects our focus on
                                helping ambitious organisations modernise with purpose and execute with clarity.
                            </p>
                            <Link className="about-inline-link" to="/contact">
                                Start a conversation <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
