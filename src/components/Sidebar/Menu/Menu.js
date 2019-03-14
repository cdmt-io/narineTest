import React from 'react';
import styles from './Menu.module.scss';
import FlexLink from '../../FlexLink';

const Menu = ({ menu }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <FlexLink
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </FlexLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
