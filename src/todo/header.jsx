import React from 'react';
import { NavLink } from 'react-router-dom';

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
const header = () => (
  <header className="w-full h-20 bg-sky-700 flex justify-between items-center px-5">
    <span className="text-2xl text-white">Logo</span>
    <ul>
      <li className="flex  gap-x-4 text-white">
        {routes.map(({ id, name, url }) => (
          <NavLink to={url} key={id}>
            {name}
          </NavLink>
        ))}
      </li>
    </ul>
  </header>
);

export default header;
