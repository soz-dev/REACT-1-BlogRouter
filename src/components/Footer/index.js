// == Import : npm
import React from 'react';

// == Import : local
import './footer.scss';

// == Composant
const Footer = () => {
  // Calcul de l'année en cours
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer id="footer">
      DevOfThrones, le blog du développeur React - {currentYear} &copy;
    </footer>
  );
};

// == Export
export default Footer;
