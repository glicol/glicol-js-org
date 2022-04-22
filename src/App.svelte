<script>
  import GitHub from './lib/GitHub.svelte'
  import Logo from './lib/Logo.svelte'
  import { onMount } from 'svelte'
  import SvelteMarkdown from 'svelte-markdown'
  import Select from 'svelte-select';

  let source, itemValue;
  const docs = ["introduction", "hellosound", "connection", "gui", "usesamples", "mixing", "adsr"]

	onMount(async () => {
    window.addEventListener('hashchange', async (e)=> {    
      let doc = location.hash.replace("#", "");
      itemValue = doc;
      const res = await fetch(`./${doc}.md`);
      source = await res.text();
    })
    let doc = location.hash === "" ? "" : location.hash.replace("#", "")
    itemValue = doc === "" ? "introduction" : doc;
    const res = await fetch(`./${itemValue}.md`);
    source = await res.text();
	});

  const handleChange = async (docName) => {
    location.hash = docName
		const res = await fetch(`./${docName}.md`);
		source = await res.text();
  }

  const handleSelect = async (event) => {
    if (event.detail.value === "introduction") {
      if (location.hash !== "") {
        location.hash = event.detail.value
      }
    } else {
      location.hash = event.detail.value
    }
  }

  function handleClear() {
		history.replaceState(null, null, ' ')
	}

</script>

<div class="flex justify-center bg-white">
  <div class="flex w-full flex-col">

    <nav class="sticky top-0 z-40 flex h-16 items-center justify-between bg-white py-4 border-b-2 border-gray-100">
      <div class="flex items-center pl-10"><Logo /></div>
      <div class="flex items-center pr-10"><GitHub /></div>
    </nav>

    <div class="flex flex-col sm:flex-row">


      <div class="sm:block sm:visible hidden invisible sticky sm:w-1/4 h-[calc(100vh-4rem)] bg-white overflow-y-scroll sm:overscroll-y-contain">
        <div class="pl-10 pt-10 text-lg ">
          <ul>
            <li on:click|preventDefault={()=>handleChange("introduction")}>Introduction</li>
            <li on:click|preventDefault={()=>handleChange("hellosound")}>Hello sound</li>
            <li on:click|preventDefault={()=>handleChange("connection")}>Basic connection</li>
            <li on:click|preventDefault={()=>handleChange("gui")}>GUI</li>
            <li on:click|preventDefault={()=>handleChange("usesamples")}>Use samples</li>
            <li on:click|preventDefault={()=>handleChange("mixing")}>Mixing</li>
            <li on:click|preventDefault={()=>handleChange("adsr")}>ADSR Envlope</li>
          </ul>
        </div>
      </div>

      <div class="sm:invisible sm:hidden block visible flex flex-row justify-between w-full">
				<div class="select w-full py-4 px-4">
					<!-- <form> -->
					<Select value={itemValue} items={docs} isSearchable={false} isClearable={false} on:select={handleSelect} on:clear={handleClear} ></Select>
					<!-- </form> -->
				</div>
			</div>
      
      <div class="flex sm:w-3/4 w-full items-center flex-col border-l-2 border-gray-100 sm:h-[calc(100vh-4rem)] overflow-y-scroll sm:overscroll-y-contain">
        <!-- <div class="sticky top-16 h-20 w-full bg-green-500">Don't scroll</div>h-[calc(100vh-rem)] overflow-y-scroll overscroll-y-contain -->
        <div class="sm:max-w-3xl sm:px-10 w-full px-4 pb-10">
          <SvelteMarkdown {source} />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  li {
    @apply hover:cursor-pointer  hover:text-blue-400 text-gray-500 py-2;
  }

  @layer base {
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
      @apply pb-4 pt-10
    }

    h3 {
      font-family: 'Inter', sans-serif;
      font-size: large !important;
      font-weight: bold !important;
      font-style: italic !important;
      @apply pb-2
    }

    blockquote {
      /* font-style: italic; */
      @apply text-sm border-l-4 border-gray-300 px-4 bg-gray-100
    }

    iframe {
      @apply pb-2 w-full
    }

    pre {
      @apply bg-gray-100 px-4 pb-2 w-full;
    }

    p, a, blockquote {
      font-family: 'Inter', sans-serif;
      line-height: 1.8;
      @apply pb-2
      /* font-family: 'Inconsolata', monospace; */
    }

    ul, a {
      font-size: 14px;
    }

    code {
      font-size: 16px;
    }
  }
</style>