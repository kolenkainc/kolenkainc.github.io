import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: '@font-face{font-family:Academy;src:url("Academy.ttf")}.title.svelte-1sbq6xt{height:50vh;font-family:Academy}.text.svelte-1sbq6xt{position:relative;top:50%;transform:translateY(-50%);font-size:7.4vw}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import welcome from \\"$lib/images/svelte-welcome.webp\\";\\n  import welcome_fallback from \\"$lib/images/svelte-welcome.png\\";\\n<\/script>\\n\\n<svelte:head>\\n  <title>Kolenka Inc</title>\\n  <meta name=\\"description\\" content=\\"Kolenka Inc\\" />\\n</svelte:head>\\n\\n<section>\\n  <div class=\\"title\\">\\n    <div class=\\"text\\">\\n      <p>Привет</p>\\n      <p>Мы — Коленка Инкорпорейтед</p>\\n    </div>\\n  </div>\\n</section>\\n\\n<style>\\n  @font-face {\\n    font-family: Academy;\\n    src: url(\\"Academy.ttf\\");\\n  }\\n\\n  .title {\\n    height: 50vh;\\n    font-family: Academy;\\n  }\\n\\n  .text {\\n    position: relative;\\n    top: 50%;\\n    transform: translateY(-50%);\\n    font-size: 7.4vw;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoBE,UAAW,CACT,WAAW,CAAE,OAAO,CACpB,GAAG,CAAE,kBACP,CAEA,qBAAO,CACL,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,OACf,CAEA,oBAAM,CACJ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,SAAS,CAAE,KACb"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-9480mj_START -->${$$result.title = `<title>Kolenka Inc</title>`, ""}<meta name="description" content="Kolenka Inc"><!-- HEAD_svelte-9480mj_END -->`, ""} <section data-svelte-h="svelte-gl5kkw"><div class="title svelte-1sbq6xt"><div class="text svelte-1sbq6xt"><p>Привет</p> <p>Мы — Коленка Инкорпорейтед</p></div></div> </section>`;
});
export {
  Page as default
};
