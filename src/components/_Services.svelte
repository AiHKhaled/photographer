<script lang="ts">
    import Job from './_Job.svelte';
    import camera from '$lib/static/camera.svg';
    import picture from '$lib/static/picture.svg';
    import video from '$lib/static/video.svg';

    let jobs: { id: number; image: string; title: string; description: string }[] = [
        {
            id: 1,
            image: camera,
            title: 'Photo Shooting',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eum eius'
        },
        {
            id: 2,
            image: picture,
            title: 'Retouch',
            description:
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eum eius nulla praesentium alias blanditiis.'
        },

        {
            id: 3,
            image: video,
            title: 'Video Shooting',
            description:
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eum eius nulla praesentium alias blanditiis.'
        }
    ];
</script>

<section class=" container mt-[50px] flex lg:w-[100%] justify-between ">
    <div class="lg:justify-center flex  lg:flex-col  flex-wrap w-[200px]">
        {#each jobs as job}
            {#if job.id % 2 != 0}
                <div class=" lg:mx-[400px]  ">
                    <Job image={job.image} title={job.title} description={job.description} />
                </div>
            {:else if job.id % 2 == 0}
                <div class="sm:m-0">
                    <Job image={job.image} title={job.title} description={job.description} />
                </div>
            {/if}
        {/each}
    </div>
    <div class="lg:w-[500px] lg:align-center flex  md:flex-col lg:float-right">
        <h4 class="tracking-widest text-slate-400  md: text-4xl text-right">Services</h4>

        <p class=" invisible lg:visible pr-24 text-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in quam, vel animi
            accusamus, delectus cum harum aliquid corrupti enim ipsum quis, doloribus odit quae
            deserunt temporibus porro voluptates. Nobis.
        </p>
    </div>
</section>

<style>
    .container {
        gap: 20px;
        padding-left: 60px;
    }
</style>
