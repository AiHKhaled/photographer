<script>
    import work1 from '$lib/static/works/work1.jpg';
    import work2 from '$lib/static/works/work2.jpg';
    import work3 from '$lib/static/works/work3.jpg';
    import work4 from '$lib/static/works/work4.jpg';
    import work5 from '$lib/static/works/work5.jpg';
    import work6 from '$lib/static/works/work6.jpg';
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
            <div id="big_diamond" class="flex items-center flex-wrap">
                <div
                    class="diamond w-[100px] max-h-[100px] m-5 border-2 border-slate-400 relative overflow-hidden"
                >
                    <img class="-rotate-45 scale-150" src={work1} alt="" />
                </div>
                <div
                    class="diamond w-[100px] max-h-[100px] m-5 border-2 border-slate-400 relative overflow-hidden"
                >
                    <img class="-rotate-45 scale-150" src={work3} alt="" />
                </div>
            </div>
            <div id="big_diamond" class="flex items-center flex-nowrap">
                <div
                    class="diamond w-[100px] max-h-[100px] m-5 border-2 border-slate-400 relative overflow-hidden"
                >
                    <img class="-rotate-45 scale-150" src={work4} alt="" />
                </div>
                <div
                    class="diamond w-[100px] max-h-[100px] m-5 border-2 border-slate-400 relative overflow-hidden"
                >
                    <img class="-rotate-45 scale-150" src={work5} alt="" />
                </div>
            </div>
        </div>
        <div class="border-[3px]  self-center border-slate-300 ml-[8px] md:w-[800px] md:h-[300px]">
            <div class="md:pl-28 p-5 md:pt-10 flex flex-col justify-between gap-5">
                <span>
                    <h2 class=" text-xl font-bold">jhon doe</h2>
                    <h3 class="text-slate-400">client</h3>
                </span>
                <p class="text-slate-400 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officiis
                    fugit harum quisquam impedit saepe voluptatem accusamus nesciunt, similique
                    quasi, mollitia quod rem eligendi dignissimos explicabo? Voluptate nihil
                    voluptas aliquid.
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    #big_diamond img {
        position: sticky;
        z-index: -1;
        width: auto;
        height: auto;
    }
</style>
