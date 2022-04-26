import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import WindiCSS from 'vite-plugin-windicss'
import svelteMd from "vite-plugin-svelte-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelteMd(),svelte({extensions: [".svelte", ".md"], vite: {optimizeDeps: {include: ["highlight.js", "highlight.js/lib/core"]}}}), WindiCSS()]
})
