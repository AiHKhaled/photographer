<script>
    import landing from '$lib/static/landing.jpg';
    import Socials from '../components/_Socials.svelte';
    import Services from '../components/_Services.svelte';
    import Landing from '../components/_Landing.svelte';
</script>

<div class="container relative flex justify-between  ">
    <Socials />
    <Landing {landing} />
</div>
<Services />
