import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Handle hash navigation
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If element doesn't exist (yet), scroll to top
        window.scrollTo(0, 0);
      }
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;