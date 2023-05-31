import { locale } from '$lib/translations';
import type { Menu } from '$types';
import { writable } from 'svelte/store';


const menuStore = writable<Menu>({navigations: []});

locale.subscribe(async (lang) => {
  if(lang === undefined) return;
  const menuData: Menu = (await import(`./menu/${lang}.json`)).default;
  menuStore.set(menuData);
})

export default menuStore;
