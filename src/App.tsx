import { SwitchNavigationWithTranslation } from './SwitchNavigation'
import { useTranslation } from 'react-i18next';

import kolenkaIncLogo from './assets/koleno.svg'
import './App.css'

function App() {
  const { t } = useTranslation();
  return (
    <>
      <SwitchNavigationWithTranslation />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={kolenkaIncLogo} className="logo" alt="Kolenka Inc logo" />
        </a>
      </div>
      <h1>Kolenka Inc</h1>
      <h2>{t('home.header')}</h2>
      <ul className="functions">
        <li>{t('home.option1')}</li>
        <li>{t('home.option2')}</li>
        <li>{t('home.option3')}</li>
        <li>{t('home.option4')}</li>
        <li>{t('home.option5')}</li>
      </ul>
      <h2>{t('home.footer')}<a href="mailto:dmitry@romashov.tech">dmitry@romashov.tech</a></h2>
    </>
  )
}

export default App
