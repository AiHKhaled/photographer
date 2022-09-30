<script lang="ts">
    export let about: string;
</script>

<div class=" container relative ">
    <div class="picture absolute   ">
        <img class=" w-[220px] h-[280px]" src={about} alt="" />
    </div>
    <div class=" block description ">
        <div class="para">
            <h3 class="text-slate-400">Hello</h3>
            <h1 class="text-2xl font-bold tracking-widest">I'm IBRAHIM</h1>
            <p class="text-slate-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat debitis magnam sit,
                distinctio quasi doloremque. Laboriosam voluptas saepe id eos vitae. Repellendus
                quibusdam temporibus veritatis debitis explicabo vitae sequi aliquid asperiores fuga
                illo, exercitationem eligendi eveniet? Est quisquam ut iusto?
            </p>
            <button class="mt-5 "> Read More </button>
        </div>
    </div>
</div>

<style>
    .para {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        text-align: left;
        padding-right: 110px;
        padding-left: 20px;
        padding-top: 20px;
    }
    .picture {
        top: 0%;
        right: 0%;
        border: 3px solid rgb(148 163 184);
    }
    .container {
        padding-top: 40px;
        height: 600px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
    }
    .description {
        display: flex;
        height: 300px;
        margin-right: 120px;
        border: 3px solid rgb(226 232 240);
    }
</style>
