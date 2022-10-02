<script lang="ts">
    import Header from '$lib/head/header.svelte';
    import Footer from '$lib/footer.svelte';
    import '../app.css';
</script>

<svelte:head>
    <title>portfolio</title>
</svelte:head>

<div class="  flex-row m-10 md:m-20 ">
    <Header />

    <main class=" mt-20 md:mr-24  "><slot /></main>
</div>
