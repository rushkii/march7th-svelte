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


export const {MenuNav};
