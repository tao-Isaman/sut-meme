import { writable } from 'svelte/store'
import { api } from './_api';
import type { RequestHandler } from '../../../.svelte-kit/types/src/routes/meme/__types';
import { MemeList } from './_lib/store/meme';

export const GET: RequestHandler = async ({ locals }) => {
	// locals.userid comes from src/hooks.js
	const response = await api('GET', `get_memes`);
	

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			body: {
				memes: []
			}
		};
	}

	if (response.status === 200) {
		const body = {
			memes: await response.json()
		}
		// const stored = localStorage['meme-list']
		MemeList.set(body['memes']['data'])

		return {
			body: body['memes']['data']
		};
	}

	return {
		status: response.status
	};
};

