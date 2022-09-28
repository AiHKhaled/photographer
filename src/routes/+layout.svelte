<script lang="ts">
    import Header from '$lib/head/header.svelte';
    import Footer from '$lib/footer.svelte';
    import '../app.css';
</script>

<svelte:head>
    <title>portfolio</title>
</svelte:head>

<div class="m-20 flex-row">
    <Header />

    <main class="my-10"><slot /></main>
</div>
