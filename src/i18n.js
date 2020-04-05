import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_enUS from 'locales/en_US/common.json';
import common_ptBR from 'locales/pt_BR/common.json';
import common_ptPT from 'locales/pt_PT/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: 'common',
    defaultNS: 'common',
    fallbackLng: 'en_US',
    debug: true,
    resources: {
      en_US: {
        common: common_enUS
      },
      pt_BR: {
        common: common_ptBR
      },
      pt_PT: {
        common: common_ptPT
      }
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true
    },
    detection: {
      // order and from where user language should be detected
      order: ['cookie', 'navigator'],

      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'locale',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: 'fikZax',

      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement
    }
  });

export default i18n;