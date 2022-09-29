<script>
    import about from '$lib/static/about.jpg';
    import Works from '../../components/About/_Works.svelte';
    import Intro from '../../components/About/_Intro.svelte';
</script>

<div class="mx-[250px]">
    <Intro {about} />
    <Works />
</div>
