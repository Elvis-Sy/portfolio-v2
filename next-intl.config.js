// next-intl.config.js
import path from 'path';

/** @type {import('next-intl').NextIntlConfig} */
const config = {
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  messagesDirectory: path.resolve('./messages'),
};

export default config;
