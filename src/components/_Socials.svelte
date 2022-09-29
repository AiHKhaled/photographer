<script>
    import facebook from '$lib/static/facebook.svg';
    import instagram from '$lib/static/instagram.svg';
    import tiktok from '$lib/static/tiktok.svg';
</script>

<div class="socials self-end flex flex-col   gap-6 ml-8 mr-8  ">
    <img width="28px" class="hover:text-black" src={facebook} alt="" />
    <img width="25px" src={instagram} alt="" />
    <img width="28px" src={tiktok} alt="" />
    <div class="vl self-center " />
</div>

<style>
    .vl {
        border-left: 3px solid rgb(148 163 184);
        height: 200px;
    }
</style>
