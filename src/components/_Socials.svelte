<script>
    import facebook from '$lib/static/facebook.svg';
    import instagram from '$lib/static/instagram.svg';
    import tiktok from '$lib/static/tiktok.svg';
</script>

<div class="socials self-end flex flex-col   gap-6 ml-8 mr-8  ">
    <a class="  hover:scale-110" href="www.instagram.com">
        <img width="28px" src={facebook} alt="" /></a
    >
    <a class="  hover:scale-110" href="www.instagram.com">
        <img width="25px" src={instagram} alt="" /></a
    >
    <a class="  hover:scale-110" href="www.instagram.com">
        <img width="28px" src={tiktok} alt="" /></a
    >
    <div class="vl self-center " />
</div>

<style>
    .vl {
        border-left: 3px solid rgb(148 163 184);
        height: 200px;
    }
</style>
