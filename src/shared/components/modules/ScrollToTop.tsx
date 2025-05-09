import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollContainer = document.querySelector('#root > div');
        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: 0,
                behavior: 'instant',
            });
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
