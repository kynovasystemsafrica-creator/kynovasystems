import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import SEO from '../components/SEO';
import { FaCloudUploadAlt, FaNetworkWired, FaServer, FaShieldAlt, FaInfinity, FaMoneyBillWave } from 'react-icons/fa';
import './ServicePage.css';


const CloudComputing = () => {
    const highlights = [
        {
            title: 'Best suited for',
            description: 'Organisations modernising infrastructure, improving uptime, or preparing digital systems to support growth with less operational fragility.'
        },
        {
            title: 'Typical outcomes',
            description: 'More reliable releases, better visibility into system performance, cleaner infrastructure decisions, and more scalable cloud operations.'
        },
        {
            title: 'How we approach it',
            description: 'We look at environments, risks, dependencies, and business needs together so cloud work improves delivery instead of adding complexity.'
        }
    ];

    const features = [
        {
            title: 'Cloud Migration',
            description: 'Seamless transition of your infrastructure and applications to the cloud with minimal downtime.',
            icon: <FaCloudUploadAlt />
        },
        {
            title: 'Infrastructure Management',
            description: 'Comprehensive cloud infrastructure setup, monitoring, and optimization services.',
            icon: <FaNetworkWired />
        },
        {
            title: 'Serverless Architecture',
            description: 'Build and deploy applications without managing servers using AWS Lambda, Azure Functions, and more.',
            icon: <FaServer />
        },
        {
            title: 'Cloud Security',
            description: 'Enterprise-grade security measures to protect your data and applications in the cloud.',
            icon: <FaShieldAlt />
        },
        {
            title: 'DevOps & CI/CD',
            description: 'Automated deployment pipelines and continuous integration for faster, reliable releases.',
            icon: <FaInfinity />
        },
        {
            title: 'Cloud Cost Optimization',
            description: 'Reduce cloud spending while maintaining performance through intelligent resource management.',
            icon: <FaMoneyBillWave />
        }
    ];

    return (
        <div className="service-page">
            <SEO
                title="Cloud Computing Solutions | KYNOVA"
                description="Cloud migration, infrastructure modernization, DevOps, and cloud optimization services for organisations building more resilient digital operations."
                keywords="cloud computing, cloud migration, DevOps, infrastructure modernization, KYNOVA"
            />
            <Hero
                title="Cloud Computing Solutions"
                subtitle="Harness the power of cloud technology for scalability and innovation"
                ctaText="Get Cloud Consultation"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Transform Your Infrastructure</h2>
                        <p>
                            Our cloud computing services help businesses leverage the full potential of cloud technology.
                            Whether you're looking to migrate existing systems or build cloud-native applications from scratch,
                            our experts provide end-to-end solutions tailored to your specific requirements.
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

                    <h3 className="section-title text-center mb-lg">Cloud Services</h3>
                    <InteractiveServiceCards services={features} />

                    <div className="service-bottom-cta">
                        <div>
                            <span className="service-kicker">Planning cloud work?</span>
                            <h3>Let&apos;s shape a stronger foundation for your systems and teams.</h3>
                            <p>We can help you clarify the right cloud priorities, modernization path, and operating model for your environment.</p>
                        </div>
                        <Link className="service-inline-link" to="/contact">Talk to KYNOVA</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CloudComputing;
