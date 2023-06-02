import characters from '$locales/game/characters';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';


export const prerender = false;
export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;
	const character = get(characters)
    .characters
    .find((char) => (char.slugified === slug));

	if (character === undefined) {
		throw error(404, {message: `Looks like the character <b>${slug}</b> you are looking for is doesn't exist.` });
	}

	return { character };
};
