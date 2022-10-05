<script lang="ts">
    import { fade, fly } from 'svelte/transition';

    export let about: string;
</script>

<div
    class="  pt-[40px] h-auto md:w-auto  md:h-[600px] flex   md:flex-row-reverse md:justify-around  items-center  relative gap-5 "
>
    <div
        class=" md:absolute  md:top-0 md:right-0 border-[3px] border-slate-400       
    "
    >
        <img
            in:fly={{ duration: 500, delay: 900 }}
            out:fade
            class=" w-[700px] h-[300px] md:w-[220px] md:h-[280px]  "
            src={about}
            alt="selfie"
        />
    </div>
    <div class=" flex   md:h-[300px]  md:mr-[120px] border-2 border-slate-300 ">
        <div
            class=" flex flex-col  items-start gap-4  md:pr-[110px]   mt-10 px-[20px] md:pt-[20px]"
        >
            <h3 class="text-slate-400">Hello</h3>
            <h1 class="text-2xl font-bold tracking-widest">I'm IBRAHIM</h1>
            <p class="text-slate-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat debitis magnam sit,
                distinctio quasi doloremque. Laboriosam voluptas saepe id eos vitae.
            </p>
            <button class="my-5  "> Read More </button>
        </div>
    </div>
</div>

<style>
</style>
