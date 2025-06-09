
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const APPCODE_VM_OPTIONS: string;
	export const GJS_DEBUG_TOPICS: string;
	export const GATEWAY_VM_OPTIONS: string;
	export const USER: string;
	export const LANGUAGE: string;
	export const LC_TIME: string;
	export const npm_config_user_agent: string;
	export const WEBSTORM_VM_OPTIONS: string;
	export const WEBIDE_VM_OPTIONS: string;
	export const XDG_SESSION_TYPE: string;
	export const SSH_AGENT_PID: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const LESS: string;
	export const DESKTOP_SESSION: string;
	export const npm_package_json: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const ZSH: string;
	export const LSCOLORS: string;
	export const GTK_MODULES: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const PAGER: string;
	export const GRADLE_HOME: string;
	export const MANAGERPID: string;
	export const LC_MONETARY: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const DATAGRIP_VM_OPTIONS: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DATASPELL_VM_OPTIONS: string;
	export const npm_config_engine_strict: string;
	export const IDEA_VM_OPTIONS: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const TERMINATOR_DBUS_NAME: string;
	export const COLORTERM: string;
	export const COLOR: string;
	export const MANDATORY_PATH: string;
	export const IM_CONFIG_PHASE: string;
	export const CLION_VM_OPTIONS: string;
	export const LOGNAME: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const JETBRAINSCLIENT_VM_OPTIONS: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const XDG_SESSION_CLASS: string;
	export const DEFAULTS_PATH: string;
	export const USERNAME: string;
	export const PHPSTORM_VM_OPTIONS: string;
	export const STUDIO_VM_OPTIONS: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const WINDOWPATH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const DEVECOSTUDIO_VM_OPTIONS: string;
	export const RIDER_VM_OPTIONS: string;
	export const INVOCATION_ID: string;
	export const SESSION_MANAGER: string;
	export const PAPERSIZE: string;
	export const KAFKA_OPTS: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_RUNTIME_DIR: string;
	export const LC_ADDRESS: string;
	export const XDG_MENU_PREFIX: string;
	export const DISPLAY: string;
	export const LC_TELEPHONE: string;
	export const TERMINATOR_DBUS_PATH: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XAUTHORITY: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XMODIFIERS: string;
	export const GOLAND_VM_OPTIONS: string;
	export const LS_COLORS: string;
	export const GROOVY_HOME: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const TERMINATOR_UUID: string;
	export const LC_NAME: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const GDMSESSION: string;
	export const QT_ACCESSIBILITY: string;
	export const LC_MEASUREMENT: string;
	export const PYCHARM_VM_OPTIONS: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const KAFKA_HOME: string;
	export const QT_IM_MODULE: string;
	export const RUBYMINE_VM_OPTIONS: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const JETBRAINS_CLIENT_VM_OPTIONS: string;
	export const JAVA_HOME: string;
	export const npm_execpath: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_global_prefix: string;
	export const LC_NUMERIC: string;
	export const npm_command: string;
	export const LC_PAPER: string;
	export const VTE_VERSION: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		APPCODE_VM_OPTIONS: string;
		GJS_DEBUG_TOPICS: string;
		GATEWAY_VM_OPTIONS: string;
		USER: string;
		LANGUAGE: string;
		LC_TIME: string;
		npm_config_user_agent: string;
		WEBSTORM_VM_OPTIONS: string;
		WEBIDE_VM_OPTIONS: string;
		XDG_SESSION_TYPE: string;
		SSH_AGENT_PID: string;
		npm_node_execpath: string;
		SHLVL: string;
		npm_config_noproxy: string;
		HOME: string;
		OLDPWD: string;
		LESS: string;
		DESKTOP_SESSION: string;
		npm_package_json: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		ZSH: string;
		LSCOLORS: string;
		GTK_MODULES: string;
		GNOME_SHELL_SESSION_MODE: string;
		PAGER: string;
		GRADLE_HOME: string;
		MANAGERPID: string;
		LC_MONETARY: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		DATAGRIP_VM_OPTIONS: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DATASPELL_VM_OPTIONS: string;
		npm_config_engine_strict: string;
		IDEA_VM_OPTIONS: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		TERMINATOR_DBUS_NAME: string;
		COLORTERM: string;
		COLOR: string;
		MANDATORY_PATH: string;
		IM_CONFIG_PHASE: string;
		CLION_VM_OPTIONS: string;
		LOGNAME: string;
		JOURNAL_STREAM: string;
		_: string;
		JETBRAINSCLIENT_VM_OPTIONS: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		XDG_SESSION_CLASS: string;
		DEFAULTS_PATH: string;
		USERNAME: string;
		PHPSTORM_VM_OPTIONS: string;
		STUDIO_VM_OPTIONS: string;
		TERM: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		WINDOWPATH: string;
		npm_config_node_gyp: string;
		PATH: string;
		DEVECOSTUDIO_VM_OPTIONS: string;
		RIDER_VM_OPTIONS: string;
		INVOCATION_ID: string;
		SESSION_MANAGER: string;
		PAPERSIZE: string;
		KAFKA_OPTS: string;
		NODE: string;
		npm_package_name: string;
		XDG_RUNTIME_DIR: string;
		LC_ADDRESS: string;
		XDG_MENU_PREFIX: string;
		DISPLAY: string;
		LC_TELEPHONE: string;
		TERMINATOR_DBUS_PATH: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		XAUTHORITY: string;
		XDG_SESSION_DESKTOP: string;
		XMODIFIERS: string;
		GOLAND_VM_OPTIONS: string;
		LS_COLORS: string;
		GROOVY_HOME: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		TERMINATOR_UUID: string;
		LC_NAME: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		GDMSESSION: string;
		QT_ACCESSIBILITY: string;
		LC_MEASUREMENT: string;
		PYCHARM_VM_OPTIONS: string;
		GJS_DEBUG_OUTPUT: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		KAFKA_HOME: string;
		QT_IM_MODULE: string;
		RUBYMINE_VM_OPTIONS: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		JETBRAINS_CLIENT_VM_OPTIONS: string;
		JAVA_HOME: string;
		npm_execpath: string;
		XDG_DATA_DIRS: string;
		XDG_CONFIG_DIRS: string;
		npm_config_global_prefix: string;
		LC_NUMERIC: string;
		npm_command: string;
		LC_PAPER: string;
		VTE_VERSION: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
