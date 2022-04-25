<script>
    import GitHub from './GitHub.svelte'
    import Logo from './Logo.svelte'
    import Select from 'svelte-select';
    import Introduction from "../md/introduction.md";
    import HelloSound from "../md/hellosound.md";
    import Connection from "../md/connection.md";
    import GUI from "../md/gui.md";
    import UseSamples from "../md/usesamples.md";
    import Mixing from "../md/mixing.md";
    import ADSR from "../md/adsr.md";
    import Extension from "../md/extension.md";
    import DSL from "../md/dsl.md";

    export let doc;
    // console.log(doc)
    const docs = ["introduction", "hellosound", "connection", "gui", "usesamples", "mixing", "adsr", "dsl", "extension"]
    const handleSelect = async (event) => {
        doc = event.detail.value
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
            <ul class="">
              <li class="list"><a class={`${doc==="introduction"?"text-blue-400":"text-gray-500"}`} href="/">Introduction</a></li>
              <li class="list"><a class={`${doc==="hellosound"?"text-blue-400":"text-gray-500"}`} href="/hellosound">Hello sound</a></li>
              <li class="list"><a class={`${doc==="connection"?"text-blue-400":"text-gray-500"}`} href="/connection">Basic connection</a></li>
              <li class="list"><a class={`${doc==="gui"?"text-blue-400":"text-gray-500"}`} href="/gui">GUI</a></li>
              <li class="list"><a class={`${doc==="usesamples"?"text-blue-400":"text-gray-500"}`} href="/usesamples">Use samples</a></li>
              <li class="list"><a class={`${doc==="mixing"?"text-blue-400":"text-gray-500"}`} href="/mixing">Mixing</a></li>
              <li class="list"><a class={`${doc==="adsr"?"text-blue-400":"text-gray-500"}`} href="/adsr">ADSR Envlope</a></li>
              <li class="list"><a class={`${doc==="dsl"?"text-blue-400":"text-gray-500"}`} href="/dsl">Use the DSL</a></li>
              <li class="list"><a class={`${doc==="extension"?"text-blue-400":"text-gray-500"}`} href="/extension">Extension</a></li>
            </ul>
          </div>
        </div>
  
        <div class="sm:invisible sm:hidden block visible flex flex-row justify-between w-full">
            <div class="select w-full py-4 px-4">
                <Select value={doc} items={docs} isSearchable={false} isClearable={false} on:select={handleSelect} on:clear={handleClear} ></Select>
            </div>
        </div>

        <div class="flex sm:w-3/4 w-full items-center flex-col border-l-2 border-gray-100 sm:h-[calc(100vh-4rem)]  overflow-x-auto overflow-y-scroll sm:overscroll-y-contain">
            <div class="sm:max-w-3xl sm:px-10 w-full px-4 pb-10">

                {#if doc==="introduction"}<Introduction />{/if}
                {#if doc==="hellosound"}<HelloSound />{/if}
                {#if doc==="connection"}<Connection />{/if}
                {#if doc==="gui"}<GUI />{/if}
                {#if doc==="usesamples"}<UseSamples />{/if}
                {#if doc==="mixing"}<Mixing />{/if}
                {#if doc==="adsr"}<ADSR />{/if}
                {#if doc==="dsl"}<DSL />{/if}
                {#if doc==="extension"}<Extension />{/if}
            </div>
        </div>

        <div class="sm:invisible sm:hidden block visible flex flex-row justify-between w-full">
            <div class="select w-full py-4 px-4">
                <Select value={doc} items={docs} isSearchable={false} isClearable={false} on:select={handleSelect} on:clear={handleClear} ></Select>
            </div>
        </div>

        </div>
    </div>
</div>

<style>
    li {
        @apply hover:cursor-pointer hover:text-blue-400 text-gray-500 py-2 list-none px-0;
    };

    ul {
        @apply px-0
    }

</style>