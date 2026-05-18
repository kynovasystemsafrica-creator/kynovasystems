import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import SEO from '../components/SEO';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaPaintBrush, FaCloud, FaServer, FaBullhorn, FaGlobeAfrica, FaUsers, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { imageAssets } from '../lib/siteAssets';
import './Careers.css';

const Careers = () => {
    const fileInputRef = useRef(null);
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const [resumeForm, setResumeForm] = useState({
        full_name: '',
        email: '',
        phone: '',
        location: '',
        role_interest: '',
        portfolio: '',
        summary: '',
        resume_file: null
    });
    const [resumeStatus, setResumeStatus] = useState('');

    useEffect(() => {
        if (!isResumeModalOpen) return undefined;

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsResumeModalOpen(false);
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isResumeModalOpen]);

    const handleResumeChange = (event) => {
        const { name, value, files } = event.target;

        setResumeForm((current) => ({
            ...current,
            [name]: files ? files[0] : value
        }));
        setResumeStatus('');
    };

    const handleResumeSubmit = (event) => {
        event.preventDefault();
        setResumeStatus('Thanks. Your application details are ready for review.');
        setResumeForm({
            full_name: '',
            email: '',
            phone: '',
            location: '',
            role_interest: '',
            portfolio: '',
            summary: '',
            resume_file: null
        });

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const openResumeModal = (roleInterest = null) => {
        setResumeStatus('');
        setResumeForm((current) => ({
            ...current,
            role_interest: roleInterest ?? ''
        }));
        setIsResumeModalOpen(true);
    };

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
            title: 'UI/UX Designer',
            description: 'Accra, Ghana • Full-time • Shape user-centered product experiences, design systems, and interface flows that support clear, practical digital delivery.',
            icon: <FaPaintBrush />,
            onClick: () => openResumeModal('UI/UX Designer'),
            linkText: 'Apply Now',
            image: imageAssets.team.src
        },
        {
            title: 'Cloud Solutions Architect',
            description: 'Accra, Ghana / Remote • Full-time • Design resilient cloud environments and modernization paths that support scale, visibility, and stronger engineering workflows.',
            icon: <FaCloud />,
            onClick: () => openResumeModal('Cloud Solutions Architect'),
            linkText: 'Apply Now',
            image: imageAssets.presentation.src
        },
        {
            title: 'DevOps Engineer',
            description: 'Remote • Full-time • Improve reliability through deployment automation, observability, infrastructure workflows, and practical release discipline.',
            icon: <FaServer />,
            onClick: () => openResumeModal('DevOps Engineer'),
            linkText: 'Apply Now',
            image: imageAssets.presentation.src
        },
        {
            title: 'Digital Marketing Specialist',
            description: 'Accra, Ghana • Full-time • Help clarify our market presence through better campaigns, stronger messaging, content planning, and digital growth initiatives.',
            icon: <FaBullhorn />,
            onClick: () => openResumeModal('Digital Marketing Specialist'),
            linkText: 'Apply Now',
            image: imageAssets.meeting.src
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
                        <button
                            type="button"
                            className="careers-cta-link careers-resume-trigger"
                            aria-expanded={isResumeModalOpen}
                            aria-controls="resume-application-form"
                            onClick={() => openResumeModal()}
                        >
                            Send Your Resume <FaArrowRight />
                        </button>

                    </div>
                </div>
            </section>

            {isResumeModalOpen && typeof document !== 'undefined' && createPortal((
                <div
                    className="careers-modal-backdrop"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setIsResumeModalOpen(false);
                        }
                    }}
                >
                    <div className="careers-modal-frame">
                            <div
                                className="careers-resume-panel"
                                id="resume-application-form"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="resume-form-title"
                            >
                                <div className="careers-modal-header">
                                    <div>
                                        <span className="careers-kicker">Resume submission</span>
                                        <h2 id="resume-form-title">Tell us about yourself.</h2>
                                    </div>
                                    <button
                                        type="button"
                                        className="careers-modal-close"
                                        aria-label="Close resume form"
                                        onClick={() => setIsResumeModalOpen(false)}
                                    >
                                        &times;
                                    </button>
                                </div>

                                {resumeStatus && (
                                    <div className="careers-modal-alert" role="status">
                                        {resumeStatus}
                                    </div>
                                )}

                                <form className="careers-application-form" onSubmit={handleResumeSubmit}>
                                    <div className="careers-form-row">
                                        <div className="careers-form-group">
                                            <label htmlFor="resume-full-name">Full name <span aria-hidden="true">*</span></label>
                                            <input
                                                id="resume-full-name"
                                                name="full_name"
                                                type="text"
                                                value={resumeForm.full_name}
                                                onChange={handleResumeChange}
                                                required
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="careers-form-group">
                                            <label htmlFor="resume-email">Email address <span aria-hidden="true">*</span></label>
                                            <input
                                                id="resume-email"
                                                name="email"
                                                type="email"
                                                value={resumeForm.email}
                                                onChange={handleResumeChange}
                                                required
                                                placeholder="jane@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="careers-form-row">
                                        <div className="careers-form-group">
                                            <label htmlFor="resume-phone">Phone number</label>
                                            <input
                                                id="resume-phone"
                                                name="phone"
                                                type="tel"
                                                value={resumeForm.phone}
                                                onChange={handleResumeChange}
                                                placeholder="+233..."
                                            />
                                        </div>
                                        <div className="careers-form-group">
                                            <label htmlFor="resume-location">Location</label>
                                            <input
                                                id="resume-location"
                                                name="location"
                                                type="text"
                                                value={resumeForm.location}
                                                onChange={handleResumeChange}
                                                placeholder="Accra, Ghana"
                                            />
                                        </div>
                                    </div>

                                    <div className="careers-form-row">
                                        <div className="careers-form-group">
                                            <label htmlFor="resume-role">Role interest <span aria-hidden="true">*</span></label>
                                            <input
                                                id="resume-role"
                                                name="role_interest"
                                                type="text"
                                                value={resumeForm.role_interest}
                                                onChange={handleResumeChange}
                                                required
                                                placeholder="e.g. Frontend Developer, Product Designer, General application"
                                            />
                                        </div>
                                        <div className="careers-form-group">
                                            <label htmlFor="resume-portfolio">Portfolio or LinkedIn</label>
                                            <input
                                                id="resume-portfolio"
                                                name="portfolio"
                                                type="url"
                                                value={resumeForm.portfolio}
                                                onChange={handleResumeChange}
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>

                                    <div className="careers-form-group">
                                        <label htmlFor="resume-file">Resume file <span aria-hidden="true">*</span></label>
                                        <input
                                            id="resume-file"
                                            name="resume_file"
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleResumeChange}
                                            accept=".pdf,.doc,.docx"
                                            required
                                        />
                                        <span className="careers-file-note">PDF, DOC, or DOCX files are accepted.</span>
                                    </div>

                                    <div className="careers-form-group">
                                        <label htmlFor="resume-summary">Short bio</label>
                                        <textarea
                                            id="resume-summary"
                                            name="summary"
                                            value={resumeForm.summary}
                                            onChange={handleResumeChange}
                                            rows="4"
                                            placeholder="Share your background, strengths, and the kind of work you want to do."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-large careers-modal-submit">
                                        Submit resume
                                    </button>
                                </form>
                            </div>
                    </div>
                </div>
            ), document.body)}
        </div>
    );
};

export default Careers;
