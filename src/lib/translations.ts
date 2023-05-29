import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

export const langs = {
  cht: "中文(繁體)",
  cn: "中文(简体)",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
  ko: "한국어",
  th: "ภาษาไทย",
  vi: "Tiếng Việt",
  id: "Indonesia",
  es: "Español",
  pt: "Português",
  ru: "Русский"
}


const config: Config =({
  initLocale: 'en',
	fallbackLocale: 'en',
  loaders: [
    ...Object.entries(langs).map(([locale]) => ({
			locale,
			key: 'common',
			loader: async () => await import(`../locales/common/${locale}.json`)
		})),
  ]
})

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
