<script>
    import landing from '$lib/static/landing.jpg';
    import Socials from '../components/_Socials.svelte';
    import Services from '../components/_Services.svelte';
    import Landing from '../components/_Landing.svelte';
</script>

<div
    class=" ml-20  md:ml-0 container md:relative flex flex-col justify-evenly items-center md:flex-row md:justify-between  "
>
    <Socials />
    <Landing {landing} />
</div>
<Services />
