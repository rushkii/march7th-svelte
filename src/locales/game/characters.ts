import { locale } from '$lib/translations';
import type { CharactersData } from '$types';
import { writable } from 'svelte/store';


const charStore = writable<CharactersData>({characters: []});

locale.subscribe(async (lang) => {
  if(lang === undefined) return;
  const charData: CharactersData = (await import(`./characters/${lang}.json`)).default;
  charStore.set(charData);
})

export default charStore;
