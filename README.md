## What's this?

This is an example of how to use `glicol.js` npm package:

https://glicol-npm.netlify.app

It's created with `vite` framework using only vanilla JS (no React, Vue, etc.).

Pay attention to the `vite.config.js` for how `CORS` is enabled for vite dev server, which is a requirement to use glicol.js. The `_headers` file does the same thing for the deployment on Netlify.

The `index.html` contains only one button and several sliders.

The `main.js` is how the logic works, which is very simple to read.

## Run locally

- `git clone THIS_REPO`
- `npm i`
- `npm run dev`