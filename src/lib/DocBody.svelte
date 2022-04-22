<script>
    import GitHub from './GitHub.svelte'
    import Logo from './Logo.svelte'
    import Select from 'svelte-select';
    import SvelteMarkdown from 'svelte-markdown'
    import { beforeUpdate, onMount } from 'svelte'
    export let doc;
    let source;
    // let docs = [];
    const docs = ["introduction", "hellosound", "connection", "gui", "usesamples", "mixing", "adsr"]
    // console.log(doc)

	beforeUpdate(async () => {
        const res = await fetch(`./${doc}.md`);
        source = await res.text();
	});
    const handleSelect = async (event) => {
        if (event.detail.value === "introduction") {
            window.location.href = `.`
        } else {
            window.location.href = `./${event.detail.value}`;
        }
        
        window.scrollTo({ top: 0 });
    }
    function handleClear() {
        history.replaceState(null, null, ' ')
    }
</script>

<div class="flex justify-center bg-white">
    <div class="flex w-full flex-col">
  
      <nav class="sticky top-0 z-40 flex h-16 items-center justify-between bg-white py-4 border-b-2 border-gray-100">
        <div class="flex items-center sm:pl-10 pl-4"><Logo /></div>
        <div class="flex items-center sm:pr-10 pr-4"><GitHub /></div>
      </nav>
  
      <div class="flex flex-col sm:flex-row">
  
  
        <div class="sm:block sm:visible hidden invisible sticky sm:w-1/4 h-[calc(100vh-4rem)] bg-white overflow-y-scroll sm:overscroll-y-contain">
          <div class="pl-10 pt-10 text-lg ">
            <ul>
              <li><a href="/">Introduction</a></li>
              <li><a href="/hellosound">Hello sound</a></li>
              <li><a href="/connection">Basic connection</a></li>
              <li><a href="/gui">GUI</a></li>
              <li><a href="/usesamples">Use samples</a></li>
              <li><a href="/mixing">Mixing</a></li>
              <li><a href="/adsr">ADSR Envlope</a></li>
            </ul>
          </div>
        </div>
  
        <div class="sm:invisible sm:hidden block visible flex flex-row justify-between w-full">
            <div class="select w-full py-4 px-4">
                <!-- <form> -->
                <Select value={doc} items={docs} isSearchable={false} isClearable={false} on:select={handleSelect} on:clear={handleClear} ></Select>
                <!-- </form> -->
            </div>
        </div>

        <div class="flex sm:w-3/4 w-full items-center flex-col border-l-2 border-gray-100 sm:h-[calc(100vh-4rem)]  overflow-x-auto overflow-y-scroll sm:overscroll-y-contain">
            <!-- <div class="sticky top-16 h-20 w-full bg-green-500">Don't scroll</div>h-[calc(100vh-rem)] overflow-y-scroll overscroll-y-contain -->
            <div class="sm:max-w-3xl sm:px-10 w-full px-4 pb-10">
            <SvelteMarkdown {source} />
            </div>
        </div>

        <div class="sm:invisible sm:hidden block visible flex flex-row justify-between w-full">
            <div class="select w-full py-4 px-4">
                <!-- <form> -->
                <Select value={doc} items={docs} isSearchable={false} isClearable={false} on:select={handleSelect} on:clear={handleClear} ></Select>
                <!-- </form> -->
            </div>
        </div>
</div>
</div>
</div>
