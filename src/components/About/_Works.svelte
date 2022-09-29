<script lang="ts">
    import work1 from '$lib/static/works/work1.jpg';
    import work2 from '$lib/static/works/work2.jpg';
    import work3 from '$lib/static/works/work3.jpg';
    import work4 from '$lib/static/works/work4.jpg';
    import work5 from '$lib/static/works/work5.jpg';
    import work6 from '$lib/static/works/work6.jpg';

    const images: string[] = [work1, work2, work3, work4, work5, work6];
</script>

<div>
    <div class="mb-[-20px]">
        <h2 class="text-slate-400">portfolio</h2>
        <h1 class="text-2xl font-bold tracking-widest">My Latest Work</h1>
    </div>
    <div class=" img-cont flex items-end justify-start flex-wrap gap-5 mx-24">
        {#each images as image}
            <img class="" src={image} alt="" />
        {/each}
    </div>
</div>

<style>
    img {
        width: 200px;
        height: fit-content;
    }
</style>
