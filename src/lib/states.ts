import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const mode = writable('');

//from tailwind docs
if (browser) {
	if (localStorage.theme === 'dark') {
		mode.set('dark');
	} else {
		mode.set('');
	}
}
