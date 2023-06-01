// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

type Menu = {
  navigations: Nav[]
}

type Nav = {
  name: string
  link: string
  icon: string
}

type Character = {
  id: number
  name: string
  slugified: string
  rarity: number
  element: string
  elementTr: string
  path: string
  pathTr: string
}

type CharactersData = {
  characters: Character[]
}

type Element = {
  id: string
  name: string
  originalName: string
}

type ElementsData = {
  elements: Element[]
}

type Path = {
  id: string
  name: string
  originalName: string
}

type PathsData = {
  paths: Path[]
}


export const { MenuNav, CharacterData };
