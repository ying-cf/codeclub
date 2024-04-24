/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// src/index.ts
var src_default = {
  async fetch(request, env, ctx) {
    if(request.method.toUpperCase()=="POST") {
      return new Response("Thank you for submitting the reponse!")
    }
    else {
         return new Response("Hello World!");
    }
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map

