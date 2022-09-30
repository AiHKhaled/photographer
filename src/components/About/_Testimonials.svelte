<script>
    import work1 from '$lib/static/works/work1.jpg';
    import work2 from '$lib/static/works/work2.jpg';
    import work3 from '$lib/static/works/work3.jpg';
    import work4 from '$lib/static/works/work4.jpg';
    import work5 from '$lib/static/works/work5.jpg';
    import work6 from '$lib/static/works/work6.jpg';
</script>

<div class="text-right">
    <h2 class="text-slate-400">testemonials</h2>
    <h1 class="text-2xl font-bold tracking-widest">Happy Clients Say</h1>
</div>

<div class="flex items-center  ">
    <div id="big">
        <div id="big_diamond">
            <div class="diamond">
                <img src={work1} alt="" />
            </div>
            <div class="diamond">
                <img src={work3} alt="" />
            </div>
        </div>
        <div id="big_diamond">
            <div class="diamond">
                <img src={work4} alt="" />
            </div>
            <div class="diamond">
                <img src={work5} alt="" />
            </div>
        </div>
    </div>
    <div class="border-[3px] border-slate-300 ml-[8px] w-[800px] h-[300px]">
        <div class="pl-28 pt-10 flex flex-col justify-between gap-5">
            <span>
                <h2 class=" text-xl font-bold">jhon doe</h2>
                <h3 class="text-slate-400">client</h3>
            </span>
            <p class="text-slate-400 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officiis fugit
                harum quisquam impedit saepe voluptatem accusamus nesciunt, similique quasi,
                mollitia quod rem eligendi dignissimos explicabo? Voluptate nihil voluptas aliquid.
            </p>
        </div>
    </div>
</div>

<style>
    #big {
        margin-top: 80px;
        transform: rotate(45deg);
        left: 6.4%;
        margin-bottom: 120px;
        position: relative;
        float: left;
    }
    #big_diamond {
        display: flex;
        align-items: center;
        flex-wrap: no-wrap;
    }
    .diamond {
        width: 150px;
        max-height: 150px;
        margin: 20px;
        border: 3px solid rgb(203 213 225);
        position: relative;
        overflow: hidden;
    }
    #big_diamond img {
        position: sticky;
        z-index: -1;
        width: auto;
        height: auto;
        transform: rotate(-45deg) scale(1.6);
    }
</style>
