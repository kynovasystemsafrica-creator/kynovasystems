import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getImageAsset } from '../lib/siteAssets';
import './InteractiveServiceCards.css';

const InteractiveServiceCards = ({ services }) => {
    const servicesRef = useRef([]);
    const fallbackImages = [
        '/landing-section-meeting.jpg',
        '/landing-section-presentation.jpg',
        '/landing-section-team.jpg'
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('slide-in');
                        }, index * 150);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentServices = servicesRef.current;
        currentServices.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentServices.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="services-list">
            {services.map((service, index) => {
                const imageAsset = getImageAsset(service.image || fallbackImages[index % fallbackImages.length]);

                return (
                service.onClick ? (
                    <button
                        key={index}
                        type="button"
                        onClick={service.onClick}
                        className="service-item service-item-link service-item-button"
                        ref={el => servicesRef.current[index] = el}
                        aria-label={`${service.title}: ${service.linkText || 'Learn More'}`}
                    >
                        <div className="service-media">
                            <img
                                className="service-image"
                                src={imageAsset.src}
                                srcSet={imageAsset.srcSet}
                                sizes={imageAsset.sizes}
                                width={imageAsset.width}
                                height={imageAsset.height}
                                alt={service.title}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="service-number">
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="service-content">
                            <div className="service-header">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                            </div>
                            <p className="service-description">{service.description}</p>
                            <div className="service-link as-text">
                                <span>{service.linkText || 'Learn More'}</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                    <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="service-line"></div>
                    </button>
                ) : service.link ? (
                    <Link
                        key={index}
                        to={service.link}
                        className="service-item service-item-link"
                        ref={el => servicesRef.current[index] = el}
                        aria-label={`${service.title}: ${service.linkText || 'Learn More'}`}
                    >
                        <div className="service-media">
                            <img
                                className="service-image"
                                src={imageAsset.src}
                                srcSet={imageAsset.srcSet}
                                sizes={imageAsset.sizes}
                                width={imageAsset.width}
                                height={imageAsset.height}
                                alt={service.title}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="service-number">
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="service-content">
                            <div className="service-header">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                            </div>
                            <p className="service-description">{service.description}</p>
                            <div className="service-link as-text">
                                <span>{service.linkText || 'Learn More'}</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                    <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="service-line"></div>
                    </Link>
                ) : (
                    <div
                        key={index}
                        className="service-item"
                        ref={el => servicesRef.current[index] = el}
                    >
                        <div className="service-media">
                            <img
                                className="service-image"
                                src={imageAsset.src}
                                srcSet={imageAsset.srcSet}
                                sizes={imageAsset.sizes}
                                width={imageAsset.width}
                                height={imageAsset.height}
                                alt={service.title}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="service-number">
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="service-content">
                            <div className="service-header">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                            </div>
                            <p className="service-description">{service.description}</p>
                            <div className="service-link as-text">
                                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Key Feature</span>
                            </div>
                        </div>
                        <div className="service-line"></div>
                    </div>
                )
                );
            })}
        </div>
    );
};

export default InteractiveServiceCards;
