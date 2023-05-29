<script lang="ts">
	import Icon from "@iconify/svelte";

  export let show: boolean;
</script>

<footer class="{show ? 'block' : 'hidden'} bottom-0 py-5 px-10 w-screen border-t border-gray-800 text-white">
  <div class="flex justify-between">
    <div class="w-[23rem] text-gray-400 italic">
      <span class="font-bold text-gray-300">March.7th</span> is not affiliated with HoYoverse.<br/>
      <div class="text-start mt-1">
        All game assets, game contents and materials are trademarks and copyrights of HoYoverse.
      </div>
    </div>
    <div class="flex">
      <div class="flex px-3 flex-col items-center border-r-2 border-r-gray-500">
        <div class="font-semibold text-lg text-gray-300">Developer</div>
        <div class="flex gap-2 py-1">
          <a href="https://twitter.com/kiizuha_"><Icon icon="mdi:twitter" width="35"/></a>
          <a href="https://discordapp.com/users/333017995368464385"><Icon icon="mdi:discord" width="35"/></a>
          <a href="https://kiizuha1.t.me"><Icon icon="mdi:telegram" width="35"/></a>
        </div>
      </div>
      <div class="flex px-3 flex-col items-center border-r-2 border-r-gray-500">
        <div class="font-semibold text-lg text-gray-300">Toolkit</div>
        <div class="flex gap-2 py-1">
          <a href="https://kit.svelte.dev"><Icon icon="devicon-plain:svelte" width="35"/></a>
          <a href="https://tailwindcss.com"><Icon icon="mdi:tailwind" width="40"/></a>
        </div>
      </div>
      <div class="flex px-3 flex-col items-center">
        <div class="font-semibold text-lg text-gray-300">Source Code</div>
        <div class="flex gap-2 py-1 italic">
          Soon maybe? <span class="not-italic">🤔</span>
        </div>
      </div>
    </div>
  </div>
</footer>
