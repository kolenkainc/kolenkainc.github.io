import React, { useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

import './SwitchNavigation.css';
import { Russian } from './Russian';
import { Croatian } from './croatian';
import type { Language } from './Language';

const languages = [new Russian(), new Croatian()];

function SwitchNavigation() {
  const { i18n } = useTranslation();
  const [selectedLanguage, selectLanguage] = useState<string>(i18n.language);

  const handleClick = async (lang: Language) => {
    await i18n.changeLanguage(lang.toIETF());
    selectLanguage(lang.toIETF());
  };

  return (
    <ul className="switch-navigation_ul">
      <li>
        <button
          aria-label={'switch-button_' + languages[0].toIETF()}
          className={`${languages[0].isSelectedLanguage(selectedLanguage) ? 'switch-button_bold' : ''}`}
          onClick={() => handleClick(languages[0])}
        >
          {languages[0].toButtonText()}
        </button>
      </li>
      <li>
        <button
          aria-label={'switch-button_' + languages[1].toIETF()}
          className={`${languages[1].isSelectedLanguage(selectedLanguage) ? 'switch-button_bold' : ''}`}
          onClick={() => handleClick(languages[1])}
        >
          {languages[1].toButtonText()}
        </button>
      </li>
    </ul>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SwitchNavigationWithTranslation: React.ComponentType<any> =
  withTranslation()(SwitchNavigation);

export default SwitchNavigationWithTranslation;
