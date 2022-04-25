## What's glicol.js?

Glicol.js is the audio engine of [Glicol computer music language](https://glicol.org) ported from Rust to JavaScript as an NPM package.

Advantages:

- A super light-weight package (Glicol.js is 2MB whereas Tone.js is 11MB).
- Top-level audio performance: do any heavy stuff on main thread; no garbage-collection in audio thread; no memory leaking.
- Write much less code for the audio graph/node in the what-you-see-is-what-you-get (declarative) style. You will see more on this next.
- Robust error-handling from Rust; no need to do try-catch.

Some requirement/limitation:

- The browsers need to reletively new (see https://caniuse.com/?search=audioworklet). So, if you want to support older version, this tool is not for you, at least for now.
- It's recommanded to use [Vite](https://vitejs.dev/) for developing music apps with Glicol. You can use it to create vanilla JS, Vue, React, Svelte project, with either JS or TS. It's way more faster than other tools and most of Glicol tests and demos are built with Vite.
- To get the best audio performance, you need to have `cross-origin isolation` enabled on the web server (both the dev server and the one you deploy your web app) to use this package. For `Vite` dev server, you can use my plugin [here](https://github.com/chaosprint/vite-plugin-cross-origin-isolation). For deployment on `Netlify` or `Firebase`, check their docs for editing the header files. If you use a customised server, you have to figure it out yourself.

In short, Glicol.js offers the ceiling-level audio performance in browsers, with robust memory-safety control and you will have a smooth coding experience. As trade-offs, it doesn't support old browsers for now and to get best of it, we recommand you use Vite and enable CORS for your dev and deployment server.

## Get started

After you `npm i glicol`, you can just write:

```js
import Glicol from "glicol"
const glicol = new Glicol()
```

Then write the graph in a declarative style:

```js
glicol.play({
    "o": sin(440).mul("~am"),
    "~am": sin(0.2).mul(0.3).add(0.5)
})
```

Simple as that.

No need to create a node, and then connect it everywhere.

Note that there are two `chains` here, one is called `o` and the other is `~am`.

Only the chains without a `~` in their names will be sent to the output destination.

Therefore, it's very intuitive to seperate the modulator, although everything is working at audio rate*.

> *Glicol is an audio-first domain specific language.

Wanna some change/update?

Just call:

```js
glicol.play({
    "o": sin(110).mul("~am"),
    "~am": sin(0.2).mul(0.3).add(0.5)
})
```

The engine will analyse the difference and only update those nodes modified.

> This is the key for the what-you-see-if-what-you-get style. We have done the hard work on the engine so you don't have to manually manage all the nodes and connect them everywhere.

A lighter way to do it is to write:

```js
// chain "o", node_index 0, param 0, set to 110
glicol.sendMsg(`o, 0, 0, 110`)
```