import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/notes'>Notes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
