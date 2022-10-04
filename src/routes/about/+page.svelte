<script>
    import about from '$lib/static/about.jpg';
    import Works from '../../components/About/_Works.svelte';
    import Intro from '../../components/About/_Intro.svelte';
    import Testimonials from '../../components/About/_Testimonials.svelte';
    import { fly } from 'svelte/transition';
</script>

<div
    in:fly={{ y: 50, duration: 500, delay: 500 }}
    out:fly={{ duration: 500 }}
    class="md:mx-[250px]   md:w-auto flex flex-col justify-start items-end md:items-center  "
>
    <Intro {about} />
    <Works />
    <div class="md:mt-8  md:w-[1045px]">
        <Testimonials />
    </div>
</div>
