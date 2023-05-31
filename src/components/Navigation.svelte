<script lang="ts">
  import Icon from '@iconify/svelte';
  import menuIcon from "@iconify-icons/ion/menu";
  import closeIcon from "@iconify-icons/ion/close";
  import menuStore from "$locales/menu";
	import NavLink from "./NavLink.svelte";

  let navOpen: boolean = false;
  $: menuData = $menuStore.navigations;

  const setNavOpen = () => {
    navOpen = !navOpen
  }

  export let show: boolean;
</script>

<div class="{show ? 'fixed' : 'hidden'} z-50 py-2 px-3 w-screen border-b border-gray-800 backdrop-blur-xl overflow-hidden text-white">
  <div class="justify-between hidden 2lg:flex">
    <div class="flex px-2 items-center w-fit cursor-pointer select-none">
      <picture class="shrink-0 w-10 h-10">
        <source srcSet="/icon/logo.webp" type="image/webp" />
        <source srcSet="/icon/logo.png" type="image/png" />
        <img src="/icon/logo.png" alt="March 7th emoji" />
      </picture>
      <div
        class="ml-2 font-bold bg-gradient-to-r text-lg from-sky-400 via-blue-400 to-pink-300 from-25% via-50% to-100%"
        style="background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
      >
        March.7th
      </div>
    </div>
    <div class="flex select-none">
      <NavLink navigations={menuData} />
    </div>
  </div>
  <div
    class="block 2lg:hidden duration-100 {navOpen ? 'h-screen' : 'h-10'}"
    style="transition: height 1s"
  >
    <div class="flex justify-between items-center transition duration-300 pl-3">
      <div class="flex space-x-3 items-center">
        <picture class="shrink-0 w-10 h-10">
          <source srcSet="/icon/logo.webp" type="image/webp" />
          <source srcSet="/icon/logo.png" type="image/png" />
          <img src="/icon/logo.png" alt="March 7th emoji" />
        </picture>
        <div
          class="font-bold ml-5 bg-gradient-to-r text-lg from-sky-400 via-blue-400 to-pink-300 from-25% via-50% to-100%"
          style="background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
        >
          March.7th
        </div>
      </div>
      <button on:click={setNavOpen}>
        <Icon icon={!navOpen ? menuIcon : closeIcon} class="text-white cursor-pointer" width="35"/>
      </button>
    </div>
    <div class="px-10 py-9 flex-col justify-center relative opacity-100">
      <div class="space-y-6 text-2xl font-medium">
        <div class="w-fit space-y-2">
          <NavLink navigations={menuData} navOpen={navOpen}/>
        </div>
      </div>
    </div>
  </div>
</div>
