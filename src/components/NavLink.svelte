<script lang="ts">
  import { page } from "$app/stores";
	import type { Nav } from "$types";

  export let navigations: Nav[];
  export let navOpen: boolean = false;
</script>

{#each navigations as nav, i}
  <a
    on:click={() => {}}
    href={nav.link}
    class="hidden 2lg:flex items-center text-sm gap-2 p-2 transition-opacity hover:opacity-100 {$page.url.pathname.includes(nav.link) ? 'opacity-100': 'opacity-70'}"
  >
    <div class="shrink-0">
      <img src={nav.icon} alt="" class="w-6 h-6" />
    </div>
    <div class="text-base overflow-hidden font-medium">
      {nav.name}
    </div>
  </a>
  <a
    on:click={() => {}}
    href={nav.link}
    style="transition-delay: {i + 1}00ms"
    class="flex 2lg:hidden items-center border border-gray-800 duration-300 bg-[#2524744b] text-lg w-48 p-3 rounded-lg { navOpen && $page.url.pathname.includes(nav.link) ? 'bg-[#252474ae] border-gray-700 opacity-100 shadow-md shadow-[#0000006f]' : navOpen && "opacity-70" } {!navOpen && 'opacity-0 translate-x-40 overflow-hidden'}"
  >
    <img src={nav.icon} alt="" class="h-6 w-6 mr-3" />
    <div
      style="transition-delay: {i + 1}00ms"
      class="text-sm {$page.url.pathname === nav.link ? 'font-bold': ''}"
    >
      {nav.name}
    </div>
  </a>
{/each}
