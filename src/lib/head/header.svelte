<script lang="ts">
    import logo from '$lib/static/Logo.svg';
</script>

<header>
    <nav class=" flex items-center justify-between">
        <div class="logo h-30">
            <img src={logo} width="100" alt="" />
        </div>
        <ul class="flex justify-end items-center gap-10 mr-4 list-none font-semibold">
            <a href="/"> <li>Home</li></a>
            <a href="/about"> <li>About</li></a>
            <a href="/testimonials"> <li>Testimonials</li></a>
            <a href="/contact"> <li>Contact</li></a>
        </ul>
    </nav>
</header>
