import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Dropdown(props: { displayDropdown: any }) {
  const { t } = useTranslation();

  const handleClick = () => {
    props.displayDropdown();
  };
  return (
    <ul className="dropdownMenu">
      <li>
        <Link
          to="/animals/elephants"
          className="dropdownLink"
          onClick={handleClick}
        >
          {t('header.elephants')}
        </Link>
      </li>
      <li>
        <Link to="/animals/cats" className="dropdownLink" onClick={handleClick}>
          {t('header.cats')}
        </Link>
      </li>
    </ul>
  );
}
