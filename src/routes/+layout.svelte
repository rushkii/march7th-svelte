<script>
  import "../app.css";
  import Navigation from "$components/Navigation.svelte";
  import Footer from "$components/Footer.svelte";
  import { page } from "$app/stores";
</script>


<Navigation show={!($page.route.id === "/")}/>
<main class="flex flex-col items-center min-h-screen text-white">
  <slot />
</main>
<Footer show={!($page.route.id === "/")} />


<style>
  :global(body::-webkit-scrollbar) {
    width: 0.2em;
  }

  :global(body::-webkit-scrollbar-thumb) {
    border-radius: 20px;
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  :global(body) {
    @apply overflow-x-hidden;
  }

</style>
