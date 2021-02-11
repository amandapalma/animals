import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CatHome() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>CatHome component</h1>
      <Link to="/animals/cats/list">{t('header.catList')} </Link>
    </div>
  );
}
