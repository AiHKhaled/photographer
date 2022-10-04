<script lang="ts">
    import work1 from '$lib/static/works/work1.jpg';
    import work3 from '$lib/static/works/work3.jpg';
    import work4 from '$lib/static/works/work4.jpg';
    import work5 from '$lib/static/works/work5.jpg';
    import Square, { showFunction } from './Square.svelte';
</script>

<div class="mt-10">
    <div class="md:text-right">
        <h2 class="text-slate-400">testemonials</h2>
        <h1 class="text-2xl font-bold tracking-widest">Happy Clients Say</h1>
    </div>
    <div class="flex justify-center   items-end  ">
        <div
            id="big"
            class=" invisible md:visible my-[80px] md:left-12  rotate-45 left-8 relative float-left"
        >
            <Square
                {showFunction}
                firstImage={work1}
                secondImage={work3}
                thirdImage={work4}
                fourthImage={work5}
            />
        </div>

        <div class="border-[3px]  self-center border-slate-300 ml-[8px] md:w-[800px] md:h-[300px]">
            <div id="hidden" class="md:pl-28 p-5 md:pt-10 flex flex-col justify-between gap-5  ">
                <span>
                    <h2 class=" text-xl font-bold">lorem</h2>
                    <h3 class="text-slate-400">client</h3>
                </span>
                <p class="text-slate-400 ">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
</div>
