import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Dropdown() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <ul
      onClick={handleClick}
      className={click ? 'dropdownMenu clicked' : 'dropdownMenu'}
    >
      <li>
        <Link
          to="/animals/elephants"
          className="dropdownLink"
          onClick={() => setClick(false)}
        >
          {t('header.elephants')}
        </Link>
      </li>
      <li>
        <Link
          to="/animals/cats"
          className="dropdownLink"
          onClick={() => setClick(false)}
        >
          {t('header.cats')}
        </Link>
      </li>
    </ul>
  );
}
