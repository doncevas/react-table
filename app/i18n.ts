/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const { addLocaleData } = require('react-intl');
const enLocaleData = require('react-intl/locale-data/en');
const deLocaleData = require('react-intl/locale-data/de');
const ltLocaleData = require('react-intl/locale-data/lt');
const { DEFAULT_LOCALE } = require('./locales');

const enTranslationMessages = require('./translations/en.json');
const ltTranslationMessages = require('./translations/lt.json');

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);
addLocaleData(ltLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return { ...formattedMessages, [key]: formattedMessage };
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  lt: formatTranslationMessages('lt', ltTranslationMessages),
};
