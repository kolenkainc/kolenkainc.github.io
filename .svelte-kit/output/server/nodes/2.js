

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3Z941KzQ.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.aBd2vjtW.js"];
export const stylesheets = ["_app/immutable/assets/2.BaSuIkpz.css"];
export const fonts = [];
