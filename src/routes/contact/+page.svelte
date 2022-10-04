<script>
    import { fly } from 'svelte/transition';
    import EmailForm from '../../components/_EmailForm.svelte';
    const info = [{ Email: 'ait@gmail.com' }, { Phone: '06674222222222' }, { Address: 'hqlhklhe' }];
</script>

<section
    in:fly={{ y: 50, duration: 500, delay: 500 }}
    out:fly={{ duration: 500 }}
    class="flex justify-center flex-col md:mx-[10%] gap-20  lg:flex-row-reverse items-center "
>
    <div class="  w-[50%]">
        <h1 class="mb-4  text-2xl lg:text-4xl tracking-wide font-light">Contact</h1>
        <hr />
        <EmailForm />
    </div>
    <div class="w-[35%] px-4 lg:px-20 py-[8%]  flex flex-col gap-6 border-[3px] border-slate-300">
        {#each info as item}
            <span>
                <h3 class="text-lg tracking-wider font-bold mb-2">{Object.keys(item)}:</h3>
                <p class=" pl-2 text-md  text-slate-400">{Object.values(item)}</p>
            </span>
        {/each}
    </div>
</section>
