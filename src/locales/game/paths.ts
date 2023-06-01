import { locale } from '$lib/translations';
import type { PathsData } from '$types';
import { writable } from 'svelte/store';


const pathStore = writable<PathsData>({paths: []});

locale.subscribe(async (lang) => {
  if(lang === undefined) return;
  const elmData: PathsData = (await import(`./paths/${lang}.json`)).default;
  pathStore.set(elmData);
})

export default pathStore;
