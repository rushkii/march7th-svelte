<script lang="ts">
	import Icon from "@iconify/svelte";
  import tailwindIcon from "@iconify-icons/mdi/tailwind";
  import githubIcon from "@iconify-icons/mdi/github";
  import twitterIcon from "@iconify-icons/mdi/twitter";
  import telegramIcon from "@iconify-icons/ic/baseline-telegram";
  import discordIcon from "@iconify-icons/ic/baseline-discord";
  import svelteIcon from "@iconify-icons/devicon-plain/svelte";

  export let show: boolean;
</script>

<footer class="{show ? 'block' : 'hidden'} bottom-0 py-5 px-5 2lg:px-10 border-t border-gray-800 text-white">
  <div class="flex flex-wrap gap-10 justify-between">
    <div class="w-[23rem] text-gray-400 italic">
      <span class="font-bold text-gray-300">March.7th</span> is not affiliated with HoYoverse.<br/>
      <div class="text-start mt-1">
        All game assets, game contents and materials are trademarks and copyrights of HoYoverse.
      </div>
    </div>
    <div class="flex justify-center 2lg:justify-normal h-[5rem]">
      <div class="flex px-3 flex-col items-center justify-center border-r-2 border-r-gray-500">
        <div class="font-semibold text-sm 2lg:text-base text-gray-300 line-clamp-1 text-center">Developer</div>
        <div class="flex gap-2 py-2 text-gray-400">
          <a href="https://twitter.com/kiizuha_">
            <Icon icon={twitterIcon} width={30} class="hover:text-white duration-200" />
          </a>
          <a href="https://discordapp.com/users/333017995368464385">
            <Icon icon={discordIcon} width={30} class="hover:text-white duration-200" />
          </a>
          <a href="https://kiizuha1.t.me">
            <Icon icon={telegramIcon} width={30} class="hover:text-white duration-200" />
          </a>
        </div>
      </div>
      <div class="flex px-3 flex-col items-center justify-center border-r-2 border-r-gray-500">
        <div class="font-semibold text-sm 2lg:text-base text-gray-300 line-clamp-1 text-center">Toolkit</div>
        <div class="flex gap-2 py-2 px-2 text-gray-400">
          <a href="https://kit.svelte.dev">
            <Icon icon={svelteIcon} width={30} class="hover:text-white duration-200" />
          </a>
          <a href="https://tailwindcss.com">
            <Icon icon={tailwindIcon} width={30} class="hover:text-white duration-200" />
          </a>
        </div>
      </div>
      <div class="flex px-3 flex-col items-center justify-center">
        <div class="font-semibold text-sm 2lg:text-base text-gray-300 line-clamp-1 text-center">Available on</div>
        <div class="flex gap-2 py-1 text-gray-400">
          <a href="https://github.com/rushkii/march7th-svelte">
            <Icon icon={githubIcon} width={40} class="hover:text-white duration-200" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
