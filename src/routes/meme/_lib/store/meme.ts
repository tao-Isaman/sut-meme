import { writable } from 'svelte/store'

export type Meme = {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
};

export const MemeList = writable<Meme[]>()