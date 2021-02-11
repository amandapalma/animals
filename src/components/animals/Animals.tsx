import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Animals() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Animals component</h1>
      <ul>
        <li>
          <Link to="/animals/elephants">{t('header.elephants')} </Link>
        </li>
        <li>
          <Link to="/animals/cats">{t('header.cats')} </Link>
        </li>
      </ul>
    </div>
  );
}
