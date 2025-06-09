export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Academy.svg","Academy.ttf","favicon.png","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".ttf":"font/ttf",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.B7aSYb3_.js","app":"_app/immutable/entry/app.TptoWlZ6.js","imports":["_app/immutable/entry/start.B7aSYb3_.js","_app/immutable/chunks/entry.CuYbwsh1.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.TptoWlZ6.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.aBd2vjtW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
