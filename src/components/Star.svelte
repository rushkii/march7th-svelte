<script lang="ts">
  export let starCount: number;
</script>


{#each Array(starCount) as _}
  <img src="/icon/game/StarIconSelected.png" alt="" width="20" />
{/each}
