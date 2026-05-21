import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal = () => {
    const location = useLocation();

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('[data-aos]'));

        if (elements.length === 0) {
            return undefined;
        }

        document.documentElement.classList.add('reveal-enabled');

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isInInitialViewport = (element) => {
            const rect = element.getBoundingClientRect();

            return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        };

        elements.forEach((element) => {
            const delay = element.getAttribute('data-aos-delay');

            if (delay) {
                element.style.setProperty('--reveal-delay', `${delay}ms`);
            } else {
                element.style.removeProperty('--reveal-delay');
            }

            if (isInInitialViewport(element)) {
                element.classList.add('aos-animate');
            } else {
                element.classList.remove('aos-animate');
            }
        });

        if (reducedMotion || !('IntersectionObserver' in window)) {
            elements.forEach((element) => element.classList.add('aos-animate'));
            return undefined;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        });

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [location.pathname]);

    return null;
};

export default ScrollReveal;
