<script lang="ts">
  import {
    getElementColor,
    getRarityBgGradient,
    getRarityBorderColor
  } from "$lib/game/characters";
	import type { Character } from "$types";

  export let char: Character;
</script>

<div
  class="relative rounded-tr-2xl overflow-hidden border-b-4 border-l w-28 sm:w-32 h-36 sm:h-44 transition duration-200 hover:scale-105"
  style="background-image: linear-gradient(to bottom, {getElementColor(char.element)}1a 0%, transparent 30%);
          border-bottom-color: {getRarityBorderColor(char.rarity)}; border-left-color: {getElementColor(char.element)}6a;"
>
  <img
    src="/img/game/CharacterCards/{char.id}.webp"
    alt=""
    class="relative"
    loading="lazy"
  />
  <div
    class="flex flex-col justify-between absolute top-0 h-full w-full"
    style="background-image: linear-gradient(to top, {getRarityBgGradient(char.rarity)} 0%, #d0b73b00 40%)"
  >
    <div class="flex flex-col w-fit">
      <div class="space-y-2 bg-[#0000006c] rounded-br-lg py-1 px-2">
        <img src="/icon/game/IconNatureColor{char.element}.png" alt="" class=" w-5" loading="lazy" />
        <img src="/icon/game/IconProfession{char.path}Middle.png" alt="" class=" w-5" loading="lazy" />
      </div>
    </div>
    <div class="flex flex-col items-center text-center leading-tight py-2">
      <div class="font-medium">{@html char.name}</div>
    </div>
  </div>
</div>
