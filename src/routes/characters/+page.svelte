<script lang="ts">
  let currentPath = "";
  let currentElem = "";

  const switchPath = (path: string) => {
    currentPath = path
  }

  const switchElem = (elem: string) => {
    currentElem = elem
  }
</script>


<div class="flex flex-col items-center py-14">
  <div
    class="capitalize w-fit flex flex-col items-center justify-center px-5 py-2 font-bold text-xl 2lg:text-4xl bg-gradient-to-r from-sky-400 via-blue-400 to-pink-300 from-25% via-50% to-90%"
    style="background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
  >
    Characters
    <div class="w-14 2lg:w-16 mt-1 bg-gradient-to-r from-sky-400 via-blue-400 to-pink-300 from-25% via-50% to-100% h-1 rounded-sm"/>
  </div>
  <div class="px-5 md:p-5 space-y-5 w-fit">
    <div class="flex flex-col 2lg:flex-row space-y-10 2lg:space-y-0 overflow-x-hidden">
      <div class="flex flex-col 2lg:flex-row w-full justify-between">
        <div class="p-2 flex 2lg:flex-col gap-y-1">
          <button
            class="flex items-center p-2 space-x-3 w-fit 2lg:w-full 2lg:mx-3 cursor-pointer hover:opacity-100 rounded-md hover:bg-[#ffffff11] hover:backdrop-blur-xl {currentPath === '' ? 'rounded-md bg-[#ffffff11] backdrop-blur-xl border border-[#ffffff25]': 'opacity-60'}"
            on:click={() => switchPath("")}
          >
            <div class="w-fit {currentPath === '' ? "bg-white" : "bg-transparent"} p-1 rounded-full">
              <img src="/icon/game/AllIcon.png" alt="" class="w-6" style="filter: {currentPath === '' ?  'invert(100%)' : ''}" />
            </div>
            <div class="hidden 2lg:block">All</div>
          </button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-3 mx-10 pr-5 xl:px-5 xl:mx-0 webkit-scroll-card-y overflow-y-scroll h-[35rem]">
          {#each Array(29) as _}
          <div
            class={`relative rounded-tr-2xl overflow-hidden border-b-4 border-l w-28 sm:w-32 h-36 sm:h-44 backdrop-blur-lg transition duration-200 hover:scale-105`}
            style="background-image: linear-gradient(to bottom, #ffffff1a 0%, transparent 30%);
                    border-bottom-color: white; border-left-color: #ffffff6a;"
          >
            <img
              src=""
              alt=""
              class="relative scale-110 top-3"
            />
            <div
              class="flex flex-col justify-between absolute top-0 h-full w-full"
              style="ackground-image: linear-gradient(to top, #ffffff1a 0%, #d0b73b00 40%)"
            >
              <div class="flex flex-col w-fit">
                <div class="backdrop-blur-sm space-y-2 bg-[#0000006c] rounded-br-lg py-1 px-2">
                  <img src="" alt="" class=" w-5" />
                  <img src="" alt="" class=" w-5" />
                </div>
              </div>
              <div class="flex flex-col items-center leading-tight py-1">
                <div class="font-medium">Sumanto</div>
                <div class="flex w-20 items-center justify-center">
                  *****
                </div>
              </div>
            </div>
          </div>
          {/each}
        </div>
        <div class="p-2 px-2 flex 2lg:flex-col 2lg:w-48 w-full gap-1">
          <button
            class="flex items-center p-[0.56rem] space-x-3 cursor-pointer rounded-md hover:bg-[#ffffff11] hover:backdrop-blur-xl ${currentElem === '' ? 'rounded-md bg-[#ffffff11] backdrop-blur-xl border border-[#ffffff25]': 'opacity-60'}"
            on:click={() => switchElem("")}
          >
            <div class="w-fit">
              <img src="/icon/game/IconNatureColorQuantum.png" alt="" class="w-[20px] 2lg:w-[25px]"/>
            </div>
            <div class="hidden 2lg:block">Fire</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
