<script lang="ts">
    import { onMount } from 'svelte';
    import work1 from '$lib/static/works/work1.jpg';
    import work2 from '$lib/static/works/work2.jpg';
    import work3 from '$lib/static/works/work3.jpg';
    import work4 from '$lib/static/works/work4.jpg';
    import work5 from '$lib/static/works/work5.jpg';
    import work6 from '$lib/static/works/work6.jpg';

    let data: string[] = [];
    onMount(async () => {
        const res = await Promise.resolve({
            json: () => [work1, work2, work3, work4, work5, work1, work6]
        });
        data = res.json();
    });
    let current = 6;
</script>

<div class="">
    <div class="">
        <h2 class="text-slate-400">portfolio</h2>
        <h1 class="text-2xl font-bold tracking-widest">My Latest Work</h1>
    </div>
    <div class="  img-cont flex items-center justify-end flex-wrap gap-5 ">
        {#each data.slice(0, current) as image}
            <img class="border-slate-500 border-2 " src={image} alt="" />
        {/each}
    </div>
    <div class=" text-center mt-11 self-center ">
        {#if current < data.length}
            <button
                class="border-4 font-bold border-slate-400 px-4 py-2"
                on:click={() => (current = current + 3)}
            >
                show more</button
            >
        {:else}
            <button
                class="border-4 font-bold border-slate-400 px-4 py-2"
                on:click={() => (current = current - 3)}
            >
                show less</button
            >
        {/if}

        <!-- content here -->
    </div>
</div>

<style>
    img {
        background-size: cover;
        width: 200px;
        height: fit-content;
    }
</style>
