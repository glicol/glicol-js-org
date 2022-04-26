<script>
  import { Route } from "tinro";
  import DocBody from './lib/DocBody.svelte';

  // first, find all the div.code blocks
  // console.log(hljs)
  // document.querySelectorAll('code').forEach(el => {
  //   // then highlight each
  //   hljs.highlightElement(el);
  // });
</script>

<main>
<Route path="/*" firstmatch>

  <Route path="/">
    <DocBody doc={"introduction"} />
  </Route>
  <Route path="/:doc" let:meta>
    <DocBody doc={meta.params.doc} />
  </Route>
</Route>
</main>

<style>
  @layer utilities {

    p, a, h1, h2, h3 {
      @apply text-gray-800;
    }

    h1 {
      font-family: 'Inter', sans-serif;
      font-size: xx-large !important;
      font-weight: bold !important;
      @apply pb-6
    }

    h2 {
      font-family: 'Inter', sans-serif;
      font-size: x-large !important;
      font-weight: bold !important;
      @apply pb-4 sm:pt-10 pt-2
    }

    h3 {
      font-family: 'Inter', sans-serif;
      font-size: large !important;
      font-weight: bold !important;
      font-style: italic !important;
      @apply pt-2
    }

    blockquote {
      /* font-style: italic; */
      @apply text-sm border-l-4 border-gray-300 px-4 bg-gray-100
    }

    iframe {
      @apply pb-2 w-full
    }

    pre {
      @apply bg-gray-100 px-4 py-2 w-full overflow-x-scroll overscroll-y-auto;
    }

    p, blockquote {
      font-family: 'Inter', sans-serif;
      line-height: 1.8;
      @apply py-2
      /* font-family: 'Inconsolata', monospace; */
    }
  
    ul {
        font-size: 14px;
        @apply list-disc px-4 sm:px-8
    }

    a {
      font-family: 'Inter', sans-serif;
      @apply  text-gray-900;
    }
    code {
      /* @apply px-2; */
      font-family: 'Fira Code', monospace;
      @apply bg-gray-100 text-gray-900;
      /* font-family: 'Inter', sans-serif; */
      /* font-size: 16px !important; */
    }
  }
</style>