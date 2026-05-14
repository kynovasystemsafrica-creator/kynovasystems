import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaPencilRuler, FaPalette, FaPrint, FaInstagram, FaBullhorn, FaFilm } from 'react-icons/fa';
import './ServicePage.css';

const GraphicDesign = () => {
    const highlights = [
        {
            title: 'Best suited for',
            description: 'Brands, teams, and products that need clearer visual communication across digital interfaces, campaigns, and customer-facing materials.'
        },
        {
            title: 'Typical outcomes',
            description: 'Stronger brand consistency, cleaner product experiences, more persuasive communication assets, and visuals that support business goals.'
        },
        {
            title: 'How we approach it',
            description: 'We connect design decisions to real audience needs, business positioning, and usability so visuals are not just attractive, but useful.'
        }
    ];

    const features = [
        {
            title: 'Brand Identity Design',
            description: 'Create compelling logos, brand guidelines, and visual identities that make your business stand out and resonate with your audience.',
            icon: <FaPalette />
        },
        {
            title: 'UI/UX Design',
            description: 'Design intuitive, user-centered interfaces for web and mobile applications that delight users and drive engagement.',
            icon: <FaPencilRuler />
        },
        {
            title: 'Print Design',
            description: 'Professional brochures, business cards, banners, and all print materials designed with precision and creativity.',
            icon: <FaPrint />
        },
        {
            title: 'Social Media Graphics',
            description: 'Eye-catching social media posts, stories, and campaign visuals optimized for every platform.',
            icon: <FaInstagram />
        },
        {
            title: 'Marketing Materials',
            description: 'Impactful flyers, posters, presentations, and infographics that communicate your message effectively.',
            icon: <FaBullhorn />
        },
        {
            title: 'Motion Graphics',
            description: 'Engaging animated visuals, video intros, and motion design that bring your brand story to life.',
            icon: <FaFilm />
        }
    ];

    return (
        <div className="service-page">
            <SEO
                title="Graphic Design Services | KYNOVA"
                description="Professional graphic design services in Ghana. Brand identity, UI/UX design, print materials, social media graphics, and motion design."
                keywords="graphic design, brand identity, UI/UX design, print design, social media graphics, Ghana"
            />
            <Hero
                title="Graphic Design"
                subtitle="Stunning visuals that capture your brand essence and engage your audience"
                ctaText="Start Your Project"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Visual Excellence, Delivered</h2>
                        <p>
                            At KYNOVA, our creative team transforms ideas into powerful visual experiences.
                            From brand identity to motion graphics, we craft designs that not only look stunning
                            but drive real business results. Every pixel is placed with purpose, every colour chosen
                            with intention.
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

                    <h3 className="section-title text-center mb-lg">Design Services</h3>
                    <InteractiveServiceCards services={features} />

                    <div className="service-bottom-cta">
                        <div>
                            <span className="service-kicker">Need sharper visuals?</span>
                            <h3>Let&apos;s build a stronger design direction for your brand or product.</h3>
                            <p>We can help define the visual system, user experience priorities, and assets needed to support clearer communication.</p>
                        </div>
                        <Link className="service-inline-link" to="/contact">Talk to KYNOVA</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GraphicDesign;
