<script lang="ts">
    export let landing: string;
</script>

<div class="flex flex-col">
    <div class=" md:block float-right  max-w-xl">
        <img class="w-3/5 md:w-[400px] lg:w-[500px]" src={landing} alt="" />
    </div>
    <div class=" md:absolute md:top-[25%] md:right-[25%] text-black ">
        <h1 class=" text-lg  flex flex-col tracking-widest lg:text-6xl  ">
            Creative <span class="text-slate-400 "> Photography</span>
        </h1>
        <p class=" pt-6 text-lg w-[420px]    md:visible">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, ducimus. Reprehenderit
            iure nobis similique unde quasi? Quis soluta voluptas cumque fugiat obcaecati
        </p>
        <div class="buttons flex flex-row items-center   gap-20 pt-6   ">
            <button class="rounded-none bg-black px-7 py-3 text-slate-400 ">hire me</button>
            <button> View Portfolio</button>
        </div>
    </div>
</div>
