import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/menu.scss'

interface MenuItem {
  to: string;
  name: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu:FC<MenuProps> = ({items, ...props}) => {
  return (
    <div className='menu' {...props}>
      <ul className='menu__list'>
        {items.map((item) => 
          <li key={item.to} className='menu__item'>
            <Link to={item.to}>{item.name}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;