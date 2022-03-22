import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
  NavLink,
  Link,
  Outlet,
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
    url: '/contact',
  },
];
const header = () => {
  return (
    <header className=' w-full h-20 bg-sky-700'>
      <ul>
        <li>
          {routes.map(({ id, name, url }) => (
            <NavLink to={'/about'}>About</NavLink>
          ))}
        </li>
      </ul>
    </header>
  );
};

export default header;
