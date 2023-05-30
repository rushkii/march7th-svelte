import { locale } from '$lib/translations';
import type { MenuNav } from '$types';
import { writable } from 'svelte/store';


const menuStore = writable<MenuNav>();

locale.subscribe(async (lang) => {
  const menuData: MenuNav = (await import(`./menu/${lang}.json`)).default;
  menuStore.set(menuData);
})

export default menuStore;
