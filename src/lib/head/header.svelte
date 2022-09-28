<script lang="ts">
    import logo from '$lib/static/Logo.svg';
    type linkProps = {
        tag: string;
        href: string;
    };
    const links: linkProps[] = [
        { tag: 'Home', href: '/' },
        { tag: 'About', href: '/about' },
        { tag: 'Testimonials', href: '/testimonials' },
        { tag: 'Contact', href: '/contact' }
    ];
</script>

<header>
    <nav class=" flex items-center justify-between">
        <div class="logo h-30">
            <img src={logo} width="100" alt="logo" />
        </div>
        <ul class="flex justify-end items-center gap-10 mr-4 list-none font-semibold">
            {#each links as link}
                <a data-sveltekit-prefetch href={link.href}> <li>{link.tag}</li></a>
            {/each}
        </ul>
    </nav>
</header>
