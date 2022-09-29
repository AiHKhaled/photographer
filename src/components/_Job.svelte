<script lang="ts">
    export let image: string;
    export let title: string;
    export let description: string;
</script>

<div class="job">
    <img src={image} class="w-10" alt="" />
    <h4 class="font-semibold">{title}</h4>
    <p class="desc text-slate-500">{description}</p>
</div>

<style>
    .job {
        width: 300px;
        height: 270px;
        border: 4px solid rgb(148 163 184);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 15px;
        padding: 20px;
    }
    .desc {
        text-align: center;
        padding-left: 20px;
    }
</style>
