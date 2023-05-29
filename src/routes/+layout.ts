import { browser } from "$app/environment";
import { locale, loadTranslations } from '$lib/translations';
import type { LayoutLoad } from "./$types";

export const prerender = true;
export const load: LayoutLoad = async ({ url }) => {
  const languages = browser ? navigator.languages[0].substring(0, 2) || 'en' : 'en';
  const initLocale = locale.get() || languages;

  await loadTranslations(initLocale, url.pathname);

  return {};
}
