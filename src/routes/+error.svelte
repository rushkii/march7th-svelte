<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="flex flex-col items-center h-screen w-screen">
  <div class="flex flex-col space-y-5 items-center py-24 px-5">
    <div class="flex items-center">
      <h1 class="text-5xl font-bold border-r-2 pr-3">{$page.status}</h1>
      <img src="/emoji/pom-cry.png" alt="" class="pl-3 w-16" />
    </div>
    <div class="text-xl text-center flex-wrap w-[20rem]">{@html $page.error?.message}</div>
  </div>
</div>
