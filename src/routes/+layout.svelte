<script>
  import "../app.css";
  import Navigation from "../components/Navigation.svelte";
  import Footer from "$components/Footer.svelte";
  import { page } from "$app/stores";
</script>


<Navigation show={!($page.route.id === "/")}/>
<main class="flex flex-col items-center min-h-screen text-white">
  <slot />
</main>
<Footer show={!($page.route.id === "/")} />
