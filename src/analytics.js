import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-424LYKH5R9'); // Replace with your GA4 Measurement ID
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
    ReactGA.event({
      category,
      action,
      label
    });
  };
  
  // Usage in components
  trackEvent('Download', 'CV Download', 'Home Page');