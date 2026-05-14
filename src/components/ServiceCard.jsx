import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import './ServiceCard.css';

const ServiceCard = ({
    icon,
    title,
    description,
    linkText = 'Learn More',
    linkUrl,
    delay = 0
}) => {
    return (
        <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={400}
            gyroscope={false}
        >
            <div
                className="service-card glass-card"
                style={{ animationDelay: `${delay}ms` }}
            >
                {icon && (
                    <div className="service-icon">
                        {typeof icon === 'string' ? (
                            <img
                                src={icon}
                                alt={title}
                                width="64"
                                height="64"
                                loading="lazy"
                                decoding="async"
                            />
                        ) : (
                            icon
                        )}
                    </div>
                )}
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
                {linkUrl && (
                    <a href={linkUrl} className="service-link">
                        {linkText}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                )}
            </div>
        </Tilt>
    );
};

ServiceCard.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    linkUrl: PropTypes.string,
    delay: PropTypes.number
};

export default ServiceCard;
