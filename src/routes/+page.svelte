<script>
  import Icon from '@iconify/svelte';
</script>


<div class="min-h-screen w-full bg-cover bg-no-repeat low-brigthness-mobile" style="background-image: url('/img/background.webp')" />
<div class="absolute p-5 lg:p-18 2xl:p-24 xl:w-1/2 h-full xl:right-0 flex flex-col items-center justify-center">
  <div class="space-y-3 2lg:space-y-5 text-center flex flex-col justify-center items-center">
    <div
      class="text-4xl 2lg:text-5xl font-extrabold uppercase bg-gradient-to-r from-blue-500 to-[#f0a7da] from-25% to-75%"
      style="background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
    >
      March.7th
    </div>
    <div class="lg:text-lg xl:text-xl 2xl:px-18 md:w-[24em]">
      A community website database for the game <span class="font-semibold">Honkai: Star Rail</span> that will make your gaming experience much easier!
    </div>
    <a
      href="/characters"
      class="backdrop-blur-2xl tracking-widest flex justify-center items-center py-2 px-3 rounded-md border uppercase text-sm font-medium"
    >
      Get Started! <Icon icon="material-symbols:arrow-forward-ios-rounded" width="25" class="ml-2"/>
    </a>
  </div>
</div>


<style>
  .low-brigthness-mobile {
  filter: brightness(100%);
  }

  @media only screen and (max-width: 1279px) {
    .low-brigthness-mobile {
      filter: brightness(30%);
    }
  }
</style>
