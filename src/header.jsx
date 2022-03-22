import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';
const routes = [
  {
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'About',
    url: '/about',
  },
  {
    id: 3,
    name: 'contact',
    url: '/',
  },
];
const header = () => {
  return (
    <header className=' w-full h-20 bg-sky-700'>
      <nav>
        {routes.map(({ id, name, url }) => (
          <NavLink key={id} to={url}>
            {name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default header;
