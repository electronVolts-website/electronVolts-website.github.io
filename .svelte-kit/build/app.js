import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t\t<meta name=\"theme-color\" content=\"#BFDBFE\">\n\t\t<title>7393 website</title>\n\t\t<meta name=\"description\" content=\"website go brrrr\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/internal/start-925cf011.js",
			css: [assets + "/internal/assets/start-d5b4de3e.css"],
			js: [assets + "/internal/start-925cf011.js",assets + "/internal/chunks/vendor-608080d7.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/internal/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"feed.json","size":684,"type":"application/json"}],
	layout: ".svelte-kit/build/components/layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: [".svelte-kit/build/components/layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/layout\/?$/,
						params: empty,
						a: [".svelte-kit/build/components/layout.svelte", "src/routes/layout.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	".svelte-kit/build/components/layout.svelte": () => import("./components/layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/layout.svelte": () => import("../../src/routes/layout.svelte")
};

const metadata_lookup = {".svelte-kit/build/components/layout.svelte":{"entry":"layout.svelte-e5093bf0.js","css":[],"js":["layout.svelte-e5093bf0.js","chunks/vendor-608080d7.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-4658f049.js","css":[],"js":["error.svelte-4658f049.js","chunks/vendor-608080d7.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-6be4250e.js","css":[],"js":["pages/index.svelte-6be4250e.js","chunks/vendor-608080d7.js"],"styles":[]},"src/routes/layout.svelte":{"entry":"pages/layout.svelte-6257abbb.js","css":["assets/pages/layout.svelte-9cfe5d65.css"],"js":["pages/layout.svelte-6257abbb.js","chunks/vendor-608080d7.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/internal/" + entry,
		css: css.map(dep => assets + "/internal/" + dep),
		js: js.map(dep => assets + "/internal/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}