import './landing.css';

import { Button } from '@/components/Elements';
import reactLogo from '@/assets/react.svg';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <div className="flex justify-center py-4">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="py-4">{t('Landing.Description')}</p>
      <div className="flex justify-center space-x-2">
        <Button onClick={() => changeLanguage('en')}>English</Button>
        <Button onClick={() => changeLanguage('th')}>ภาษาไทย</Button>
      </div>
    </div>
  );
};

export default Landing;
