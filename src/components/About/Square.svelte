<script lang="ts" context="module">
    type functionProps = {
        idImage: string;
        [key: string]: any;
    };
    export function showFunction(idImage: string): void {
        var x = document.getElementById('hidden');
        let diamond = document.getElementById(idImage);

        if (diamond!.id == idImage) {
            x!.innerHTML = `
            <span>
                    <h2 class=" text-xl font-bold"> ${opinions[Number(idImage) - 1].name} </h2>
                    <h3 class="text-slate-400">client</h3>
                </span>
                <p class="text-slate-400 ">
                    ${opinions[Number(idImage) - 1].opinion}
                </p>`;

            x!.style.display = 'flex';
        }
    }
</script>

<script lang="ts">
    import { opinions } from './data';

    export let secondImage: string, firstImage: string, thirdImage: string, fourthImage: string;
</script>

<div id="big_diamond" class="flex ">
    <div
        id="1"
        on:click={() => showFunction('1')}
        class="diamond w-[100px] max-h-[100px] m-5 cursor-pointer brightness-[60%] hover:scale-[1.2] ease-in-out duration-300 hover:brightness-100 border-2 border-slate-400 relative overflow-hidden"
    >
        <img class="-rotate-45 scale-150" src={firstImage} alt="" />
    </div>
    <div
        id="2"
        on:click={() => showFunction('2')}
        class="diamond w-[100px] max-h-[100px] m-5 cursor-pointer brightness-[60%] hover:brightness-100 hover:scale-[1.2] ease-in-out duration-300 border-2 border-slate-400 relative overflow-hidden"
    >
        <img class="-rotate-45 scale-150" src={secondImage} alt="" />
    </div>
</div>

<div id="big_diamond" class="flex ">
    <div
        id="3"
        on:click={() => showFunction('3')}
        class="diamond w-[100px] max-h-[100px] m-5  cursor-pointer brightness-[60%] hover:brightness-100 hover:scale-[1.2] ease-in-out duration-300 border-2 border-slate-400 relative overflow-hidden"
    >
        <img class="-rotate-45 scale-150" src={thirdImage} alt="" />
    </div>
    <div
        id="4"
        on:click={() => showFunction('4')}
        class="diamond w-[100px] max-h-[100px] m-5 border-2 cursor-pointer brightness-[60%] hover:brightness-100 hover:scale-[1.2] ease-in-out duration-300 border-slate-400 relative overflow-hidden"
    >
        <img class="-rotate-45 scale-150" src={fourthImage} alt="" />
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
