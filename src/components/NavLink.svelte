<script lang="ts">
  import { page } from "$app/stores";

  export let href = "";
  export let name = "";
  export let icon = "";
</script>


{#if !($page.url.pathname === href)}
  <a
    href={href}
    class="flex items-center text-sm gap-2 p-2 transition-opacity hover:opacity-100 {$page.url.pathname === href ? 'opacity-100': 'opacity-70'}"
  >
    <div class="shrink-0">
      <img src={icon} alt="" class="w-6 h-6" />
    </div>
    <div class="text-base overflow-hidden font-medium">
      {name}
    </div>
  </a>
{:else}
  <div
    class="flex items-center text-sm gap-2 p-2 cursor-pointer transition-opacity hover:opacity-100 {$page.url.pathname === href ? 'opacity-100': 'opacity-70'}"
  >
    <div class="shrink-0">
      <img src={icon} alt="" class="w-6 h-6" />
    </div>
    <div class="text-base overflow-hidden font-medium">
      {name}
    </div>
  </div>
{/if}
