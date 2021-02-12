import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Dropdown from './Dropdown';
import elephantHead from '../assets/elephant-head.png';
import {
  HeaderStyled,
  NavButton,
  Logo,
  LogoImg,
  NavList,
} from '../styles/styled';
import Icon from '@mdi/react';
import { mdiMenuDown, mdiMenuUp } from '@mdi/js';

export default function Header() {
  const { t } = useTranslation();
  const [dropdown, setDropdown] = useState(false);
  console.log('dropdown: ', dropdown);

  const displayDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <HeaderStyled>
      <Link to="/">
        <Logo>
          <LogoImg alt="elephant" src={elephantHead}></LogoImg>
          <h3>{t('header.animals')} </h3>
        </Logo>
      </Link>
      <nav>
        <NavList>
          <li>
            <NavButton>
              <Link to="/">{t('header.home')}</Link>
            </NavButton>
          </li>
          <li>
            <NavButton onClick={displayDropdown}>
              <span>
                {t('header.animals')}
                <Icon path={dropdown ? mdiMenuUp : mdiMenuDown} size={0.7} />
              </span>
              {dropdown && <Dropdown displayDropdown={displayDropdown} />}
            </NavButton>
          </li>
          <span>| </span>
          <li>
            <NavButton onClick={() => i18next.changeLanguage('en')}>
              <p>EN</p>
            </NavButton>
          </li>
          <li>
            <NavButton onClick={() => i18next.changeLanguage('es')}>
              <p>ES</p>
            </NavButton>
          </li>
        </NavList>
      </nav>
    </HeaderStyled>
  );
}
