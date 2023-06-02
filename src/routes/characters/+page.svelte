<script lang="ts">
  import { t } from "$lib/translations";
	import charStore from "$locales/game/characters";
  import elmStore from "$locales/game/elements";
  import pathStore from "$locales/game/paths";
	import CharacterCard from "$components/CharacterCard.svelte";


  let currentPath = "all";
  let currentElem = "";
  $: charData = $charStore.characters;
  $: elmData = $elmStore.elements;
  $: pathData = $pathStore.paths;

  const switchPath = (path: string) => {
    currentPath = path
  }

  const switchElem = (elem: string) => {
    currentElem = elem
  }
</script>


<svelte:head>
  <title>{$t("common.characters")} - March.7th</title>
</svelte:head>


<div class="flex flex-col items-center py-14">
  <div
    class="capitalize w-fit flex flex-col items-center justify-center px-5 py-2 font-bold text-xl 2lg:text-4xl bg-gradient-to-r from-sky-400 via-blue-400 to-pink-300 from-25% via-50% to-90%"
    style="background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
  >
    {$t("common.characters")}
    <div class="w-14 2lg:w-16 mt-1 bg-gradient-to-r from-sky-400 via-blue-400 to-pink-300 from-25% via-50% to-100% h-1 rounded-sm"/>
  </div>
  <div class="px-5 md:p-5 space-y-5 w-fit">
    <div class="flex flex-col 2lg:flex-row space-y-10 2lg:space-y-0 overflow-x-hidden">
      <div class="flex flex-col 2lg:flex-row w-full items-center 2lg:items-start justify-between">
        <div class="p-2 flex 2lg:flex-col gap-1">
          {#each pathData as path}
            <button
              class="flex items-center p-2 space-x-3 w-fit 2lg:w-full 2lg:mx-3 cursor-pointer hover:opacity-100 rounded-md hover:bg-[#ffffff11] {currentPath === path.id ? 'rounded-md bg-[#ffffff11] border border-[#ffffff25]': 'opacity-60'}"
              on:click={() => switchPath(path.id)}
            >
              <div class="w-fit {currentPath === path.id ? "bg-white" : "bg-transparent"} p-1 rounded-full">
                <img
                  src="/icon/game/{path.id === "all" ? 'AllIcon' : `IconProfession${path.originalName}Middle`}.png"
                  alt=""
                  class="w-5"
                  style="filter: {currentPath === path.id ?  'invert(100%)' : ''}"
                />
              </div>
              <div class="hidden 2lg:block">{path.name}</div>
            </button>
          {/each}
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-3 px-3 xl:px-5 xl:mx-0 webkit-scroll-card-y overflow-y-scroll h-[35rem]">
          {#each charData as char}
            <CharacterCard char={char}/>
          {/each}
        </div>
        <div class="p-2 px-2 justify-center flex 2lg:flex-col 2lg:w-48 w-full gap-1">
          {#each elmData as elm}
            <button
              class="flex items-center p-[0.56rem] space-x-3 cursor-pointer rounded-md hover:bg-[#ffffff11] {currentElem === elm.id || currentElem === '' ? 'rounded-md bg-[#ffffff11] border border-[#ffffff25]': 'opacity-60'}"
              on:click={() => switchElem(elm.id)}
            >
              <div class="w-fit">
                <img
                  src="/icon/game/IconNatureColor{elm.originalName}.png"
                  alt=""
                  class="w-[15px] 2lg:w-[25px]"
                />
              </div>
              <div class="hidden 2lg:block">{elm.name}</div>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>


<style>
  .webkit-scroll-card-y::-webkit-scrollbar {
    width: 0.2em;
  }

  .webkit-scroll-card-y::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
</style>
