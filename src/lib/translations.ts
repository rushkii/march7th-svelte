import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

export const langs = {
  cht: "中文(繁體)",
  cn: "中文(简体)",
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  id: "Indonesia",
  jp: "日本語",
  kr: "한국어",
  pt: "Português",
  ru: "Русский",
  th: "ภาษาไทย",
  vi: "Tiếng Việt",
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
