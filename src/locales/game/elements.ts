import { locale } from '$lib/translations';
import type { ElementsData } from '$types';
import { writable } from 'svelte/store';


const elmStore = writable<ElementsData>();

locale.subscribe(async (lang) => {
  if(lang === undefined) return;
  const elmData: ElementsData = (await import(`./elements/${lang}.json`)).default;
  elmStore.set(elmData);
})

export default elmStore;
