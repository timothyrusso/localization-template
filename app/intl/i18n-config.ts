export const i18n = {
  defaultLocale: 'en',
  // Add more locales here
  locales: ['en', 'it'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
