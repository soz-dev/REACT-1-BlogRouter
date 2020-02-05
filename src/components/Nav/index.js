// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './nav.scss';

// == Composant
const Nav = ({ categories }) => (
  <nav className="nav">
    {categories.map(({ route, label }) => (
      <NavLink
        exact
        to={route}
        key={label}
        className="nav-link"
        activeClassName="nav-link--current"
      >
        {label}
      </NavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Nav;
